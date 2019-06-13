const axios = require('axios')

class dotaHeroes{
    static getsHero(req, res, next){
        axios.get('https://dotapi-production.herokuapp.com/heroes')
        .then(({data}) => {
            res.status(200).json(data)
        })
        .catch(next)
    }
}

module.exports = dotaHeroes