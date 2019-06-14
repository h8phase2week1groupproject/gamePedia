$(()=>{
    $('#loading').show()
    $('#loading_detail').hide()
    $('#search_form').hide()
    $('#list_hero').empty()
    $("#resultsYoutube").empty()
    
    if (localStorage.getItem('token')){
        userLogin(localStorage.getItem('name'))
    }else{
        userLogout()  
    }
    
    $('.login_link').on('click', () => {
        $('#login_page').slideDown()
        $('#register_page').slideUp()
        $('#content_page').hide()
    })

    $('.register_link').on('click', () => {
        $('#register_page').slideDown()
        $('#login_page').slideUp()
        $('#content_page').hide()
        $('#register_name').val('');
        $('#register_email').val('');
        $('#register_password').val('');
        $('#confirmpassword').val('');        
    })

    $('#register_button').on('click', function(){
        event.preventDefault()
        let name = $('#register_name').val();
        let email = $('#register_email').val();
        let password = $('#register_password').val();
        let confirmPassword = $('#confirmpassword').val();
        if (password !== confirmPassword){
            $('#confirmpassword').focus()
            Swal.fire({
                type: 'error',
                title: "Password and Confirm Password don't match",
                animation: false,
                customClass: {
                popup: 'animated tada'
                }
            })
        }else{
            register(name, email, password)
        }
    })

    $('#register_email').focusout(() => {
        email_validate2();
    })

    $('#login_button').on('click', () => {
        event.preventDefault()
        let email = $('#login_email').val();
        let password = $('#login_password').val();
        login(email, password)
    })
   
    $('#dota_link').on('click', () => {
        $('#page_pokemon').hide()
        $('#search_form').show()
        $('#dota_link').addClass('active')
        $('#pokemon_link').removeClass('active')
        $('#mobile_legend_link').removeClass('active')
        $("#resultsYoutube").empty()
        $('#myInput').val('')
        $('#listRepo').empty()
        $('#loading').show()
        $('#search_form').hide()
        $('#list_hero').empty()
        listHeroesDota()
    })

    $('#pokemon_link').on('click', () => {
        $('#search_form').show()
        $('#dota_link').removeClass('active')
        $('#pokemon_link').addClass('active')
        $('#listRepo').empty()
        $('#loading').show()
        $('#search_form').hide()
        $('#list_hero').empty()
        listPokemon()
        page_pokemon()
    })
    $('#mobile_legend_link').on('click', () => {
        $('#dota_link').removeClass('active')
        $('#mobile_legend_link').addClass('active')
        $("#resultsYoutube").empty()
        $('#myInput').val('')
        $('#listRepo').empty()
        $('#loading').show()
        $('#search_form').hide()
        $('#list_hero').empty()
        listHeroesMobileLegend()
    })

    $('#clashRoyale_link').on('click', () => {
        $('#page_pokemon').hide()
        $('#search_form').show()
        $('#dota_link').removeClass('active')
        $('#pokemon_link').removeClass('active')
        $('#mobile_legend_link').removeClass('active')
        $('#clashRoyale_link').addClass('active')
        $("#resultsYoutube").empty()
        $('#myInput').val('')
        $('#listRepo').empty()
        $('#loading').show()
        $('#search_form').hide()
        $('#list_hero').empty()
        listCard()
    })

    $('#brandLogo').on('click', () => {
        if (localStorage.getItem('token')){
            $('#register_page').hide()
            $('#login_page').hide()
            $('#content_page').show()    
        }else{
            $('#login_page').show()
            $('#register_page').hide()
            $('#content_page').hide()
        }
    })

    $('#closeSearch').on('click', () => {
        $('#myInput').val('')
        $("#list_hero li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf('') > -1)
          });
    })

    $("#myInput").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        $("#list_hero li").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput").on("enter", function() {
        let value = $(this).val().toLowerCase();
        $("#list_hero li").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    $("#myInput").on("submit", function() {
        let value = $(this).val().toLowerCase();
        $("#list_hero li").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

})