function listHeroesDota(){
    $.ajax({
        url: `${serverUrl}/dota/heroes`,
        method: 'GET',
    })
    .done((heroes) => {
        $('#loading').hide()
        $('#search_form').show()
        $(`#count_dotaHero`).empty()
        $(`#count_dotaHero`).append(`
            ${heroes.length} Heroes
        `)
        heroes.forEach(element => {
            $('#list_hero').append(`
            <li>
            <div class="col s12 m12">
                <div class="card horizontal">
                <div class="card-image">
                    <img src="${element.img}" style="width: 100%">
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                    <p>${element.name}.</p>
                    </div>
                    <div class="card-action">
                    <a href="#">Show Video</a>
                    </div>
                </div>
                </div>
            </div>
            </li>
            `)
        })
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