function listPokemon(page){
    $('#loading').show()
    let totalPokemon
    let pageList = (!page) ? `?offset=0` : `?offset=${(page - 1) * 5}`
  $.ajax({
      url: `${serverUrl}/pokeapi/pokemon/${pageList}`,
      method: 'GET',
  })
  .done((heroes) => {
    totalPokemon = heroes.count
      $('#loading').hide()
      $('#search_form').show()
      $('#page_pokemon').show()
      $(`#count_pokemon`).empty()
      $(`#count_pokemon`).append(`
          ${totalPokemon} Heroes
      `)
      heroes.results.forEach(element => {
          $('#list_hero').append(`
          <li>
            <div class="col s12 m12">
                <div class="card horizontal">
                <div class="card-image">
                    <img src="${element.img.front_default}" style="width: 100%">
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                    <p>${element.name}.</p>
                    </div>
                    <div class="card-action">
                    <a onclick="getDetailPokemon('${element.name}')" href="#">Get Detail</a>
                    </div>
                </div>
                </div>
            </div>
          </li>
          `)
      })
      return totalPokemon
  })
  .fail((jqXHR, textStatus)=>{
      Swal.fire({
          type: 'error',
          title: `${jqXHR.responseJSON.message}`,
          animation: false,
          customClass: {
            popup: 'animated tada'
          }
      })
  })
}

function page_pokemon(page) {
    $('#page_pokemon').empty()
    $('#list_hero').empty()
    $('#loading').show()
    let endPage = Math.ceil(listPokemon(page) / 20)
    let startPage, lastPage, activePage
    let classStartPage, classLastPage
    if (!page) {
        startPage = 1
        activePage = 1
        lastPage = startPage + 4
    } else if (page >= 1 && page <= 3) {
        startPage = 1
        activePage = page
        lastPage = startPage + 4
    } else {
        startPage = page - 2
        activePage = page
        lastPage = page + 2
    }
    classStartPage = (startPage == 1) ? 'disabled' : ''
    let prevPage = (activePage - 2 <= 0) ? 1 : activePage - 1 
    let nextpage = (activePage + 2 >= endPage) ? endPage : activePage + 1

    $('#page_pokemon').append(`
        <li onclick='page_pokemon(${prevPage})' class="${classStartPage}"><a href="#!"><i class="material-icons">chevron_left</i></a></li>    
    `)
    for (let x = startPage; x <= lastPage; x++) {
        let classLi = 'waves-effect'
        if (x == activePage) {
            classLi = 'active'
        }
        $('#page_pokemon').append(`
            <li onclick="page_pokemon(${x})" class="${classLi}"><a href="#!">${x}</a></li>
        `)
    }
    classLastPage = (lastPage >= endPage) ? 'disabled' : ''
    $('#page_pokemon').append(`
        <li onclick="page_pokemon(${nextpage})" class="${classLastPage}"><a href="#!"><i class="material-icons">chevron_right</i></a></li>    
    `)
}

function getDetailPokemon(pokemonName) {
    cariVideo(pokemonName, 'pokemon')
    $('#loading_detail').show()
    $.ajax({
        url: `${serverUrl}/pokeapi/pokemon/?pokeidx=${pokemonName}`,
        method: 'GET',
    }).then((pokemonDetail) => {
        $('#loading_detail').hide()
        // image
        $('#img_heroes1').attr("src", pokemonDetail.sprites.front_default)       
        $('#img_heroes2').attr("src", pokemonDetail.sprites.back_default)       
        // detail heroes 
        $('#detail_heroes').empty()
        let card_headers = ['abilities', 'forms', 'species', 'stats', 'types']
        $('#title_heroes').html(pokemonDetail.name)
        card_headers.forEach((el) => {
            $('#detail_heroes').append(`
            <div class="row">
                <div class="col s12 m12">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <h4 class="card-title">${el}</h4>
                            <ul id="${el}_card">

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            `)
        })

        // abilities
        pokemonDetail.abilities.forEach((el) => {
            $('#abilities_card').append(`
                <li>${el.ability.name}</li>
            `)
        })
        
        // forms
        pokemonDetail.forms.forEach((el) => {
            $('#forms_card').append(`
                <li>${el.name}</li>
            `)
        })
        // species 
        $('#species_card').append(`
            <li>${pokemonDetail.species.name}</li>
        `)

        // stats
        let data_stats = pokemonDetail.stats
        data_stats.forEach((el) => {
            $('#stats_card').append(`
                <li>
                    <h6>${el.stat.name}</h6>
                    Base : ${el.base_stat}
                    Effort : ${el.effort}
                </li>
            `)
        })
        // types
        let data_types = pokemonDetail.types
        data_types.forEach((el) => {
            $('#types_card').append(`
                <li>${el.type.name}</li>
            `)
        })

    })
}

function emptyPokemon() {
    $('#detail_heroes').empty()
    $('#title_heroes').html('')
    $('#img_heroes1').attr("src", '')       
    $('#img_heroes2').attr("src", '')      
}