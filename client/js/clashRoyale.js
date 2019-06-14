function listCard(){
    console.log('trigerrrrrrrrr')
    $.ajax({
        url: `${serverUrl}/clashRoyale/cards`,
        method: 'GET',
        headers:{
            token : localStorage.getItem('token')
        }
    })
    .done((cards) => {
        console.log('asdasd')
        $('#list_hero').empty()
        $('#clashRoyale_link').addClass('active')
    
        $('#loading').hide()
        $('#search_form').show()
        $(`#count_clashRoyaleCard`).empty()
        $(`#count_clashRoyaleCard`).append(`
            ${cards.length} cards
        `)
        cards.forEach(element => {
            $('#list_hero').append(`
            <li>
            <div class="col s12 m12">
                <div class="card horizontal">
                <div class="card-image">
                    <img src="${element.iconUrls.medium}" >
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                    <h5>${element.name}.</h5>
                    <p>Max Level: ${element.maxLevel}.</p>
                    </div>
                    <!-- youtube start -->
                    <a onclick="cariVideo('${element.name}', 'Clash Royale')" class="waves-effect waves-light btn modal-trigger" id="showYoutube" href="#modal1">Show Video</a>
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