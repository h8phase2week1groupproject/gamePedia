const axios = require('axios')

class PokemonController {
    static getPokemon(req, res, next){
        let pokemonName = (req.query.pokeidx) ? `/${req.query.pokeidx}` : ''
        axios.get(`https://pokeapi.co/api/v2/pokemon${pokemonName}`)
        .then(({ data }) => {
            res.status(200).json(data)
        })
        .catch(next)
    }

    static getYoutubeVideo(req, res, next) {

    }
}

module.exports = PokemonController