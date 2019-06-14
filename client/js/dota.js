function listHeroesDota(){
    $.ajax({
        url: `${serverUrl}/dota/heroes`,
        method: 'GET',
        headers:{
            token : localStorage.getItem('token')
        }
    })
    .done((heroes) => {
        $('#list_hero').empty()
        $('#dota_link').addClass('active')
    
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
                    <img src="${element.img}" >
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                    <p>${element.name}.</p>
                    </div>
                    <!-- youtube start -->
                    <a onclick="cariVideo('${element.name}')" class="waves-effect waves-light btn modal-trigger" id="showYoutube" href="#modal1">Show Video</a>
                    <!-- youtube end -->
                </div>
                </div>
            </div>
            </li>
            `)
        })
    })
    .fail((jqXHR, textStatus)=>{
        if(jqXHR.responseJSON.message == 'Unauthorized'){
            userLogout()
            // console.log(jqXHR.responseJSON.message)
        }else{
            Swal.fire({
                type: 'error',
                title: `${jqXHR.responseJSON.message}`,
                animation: false,
                customClass: {
                  popup: 'animated tada'
                }
            })
        }
    })
}