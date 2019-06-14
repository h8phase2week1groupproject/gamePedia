const axios = require('axios')

class PokemonController {
    static getPokemon(req, res, next){
        let querySend
        if (req.query.offset) {
            querySend = `/?offset=${req.query.offset}&limit=5`
        } else {
          querySend = (req.query.pokeidx) ? `/${req.query.pokeidx}` : ''
        }
        axios.get(`https://pokeapi.co/api/v2/pokemon${querySend}`)
        .then(({ data }) => {
          
          if (!querySend || req.query.offset) {
            let promises = data.results.map((one) => axios.get(one.url))
            promises.unshift(axios.get('https://pokeapi.co/api/v2/pokemon/'))
            return Promise.all(promises)
          } else {
              let requiredField = ['abilities', 'forms', 'id', 'name', 'species', 'sprites', 'stats', 'types']
              let sendData = requiredField.reduce((acc, el) => { 
                return Object.assign(acc, { [el]: data[el] })
              }, {})
              res.status(200).json(sendData)
            }
        })
        .then((results) => {
          let countHero = results[0].data.count
          results = results.slice(1).map((one) => {
            return {
              name: one.data.name,
              img: one.data.sprites,
            }
          })
          let sendData = { 
            count: countHero, 
            results: results 
          }
          res.status(200).json(sendData)
        })
        .catch(next)
    }
}

module.exports = PokemonController