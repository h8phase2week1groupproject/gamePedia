function listHeroesMobileLegend(){
    $.ajax({
        url: `${serverUrl}/mobileLegend/heroes`,
        method: 'GET',
        headers:{
            token : localStorage.getItem('token')
        }
    })
    .done((heroes) => {
        $('#list_hero').empty()
        $('#mobile_legend_link').addClass('active')
    
        $('#loading').hide()
        $('#search_form').show()
        $(`#count_mobile_legend`).empty()
        $(`#count_mobile_legend`).append(`
            ${heroes.length} Heroes
        `)
        heroes.forEach(element => {
            $('#list_hero').append(`
            <li>
            <div class="col s12 m12">
                <div class="card horizontal">
                <div class="card-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkoa-oJBO8I3TFhwByzStTa6GZ1OHjiyJSL63QqOJfFlKGgaNeQ" >
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                    <h5>${element.name}.</h5>
                    </div>
                    <!-- youtube start -->
                    <a onclick="cariVideo('${element.name}', 'mobile legend')" class="waves-effect waves-light btn modal-trigger" id="showYoutube" href="#modal1">Show Video</a>
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