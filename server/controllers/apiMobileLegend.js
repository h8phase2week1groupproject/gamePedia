const axios = require('axios')

class mobileLegendHeroes{
    static getsHero(req, res, next){
        axios.get('https://mapi.mobilelegends.com/hero/list')
        .then(({data}) => {
            res.status(200).json(data.data)
        })
        .catch(next)
    }
}

module.exports = mobileLegendHeroes