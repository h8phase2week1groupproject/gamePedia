const axios = require('axios')

class PokemonController {
    static getPokemon(req, res, next){
        let pokemonName = (req.query.pokeidx) ? `/${req.query.pokeidx}` : ''
        axios.get(`https://pokeapi.co/api/v2/pokemon${pokemonName}`)
        .then(({ data }) => {
          if (!pokemonName) {
            res.status(200).json(data)
          } else {
              let requiredField = ['abilities', 'forms', 'id', 'name', 'species', 'sprites', 'stats', 'types']
              let sendData = requiredField.reduce((acc, el) => { 
                return Object.assign(acc, { [el]: data[el] })
              }, {})
              console.log(sendData);
              
              res.status(200).json(sendData)
            }
        })
        .catch(next)
    }
}

module.exports = PokemonController