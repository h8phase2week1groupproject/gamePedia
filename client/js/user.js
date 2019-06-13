const serverUrl = 'http://localhost:3000';

function onSignIn(googleUser) {
    const idToken = googleUser.getAuthResponse().id_token;
    console.log('masuk dari google')
    axios
    .post(`${serverUrl}/googleSignIn`, { idToken })
    .then(({ data }) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('picture', data.picture);
        localStorage.setItem('name', data.name);
        localStorage.setItem('email', data.email);
        userLogin(data.name)
    })
    .catch((err) => {
      console.log(err);
    });
}

function email_validate2() {
    let pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    let email = $('#register_email').val();
    
    if (email !== '' && !pattern.test(email)){
        $('#register_email_valid').show()    
        $('#register_email_empty').hide()
        $('#register_email').focus()
    }else
    if (email !== '' && pattern.test(email)){
        $('#register_email_empty').hide()
        $('#register_email_valid').hide()
        $('#register_button').removeAttr('disabled')
    }else {
        $('#register_email_valid').hide()
        $('#register_email_empty').show()
        $('#register_email').focus()
    }
}

function register(name, email, password){
    $.ajax({
        url: `${serverUrl}/users/register`,
        method: 'POST',
        data: {
            name, email, password
        }    
    })
    .done((newUser) => {
        Swal.fire({
            position: 'center',
            type: 'success',
            title: 'Welcome',
            showConfirmButton: false,
            timer: 1500
        })
        login(email, password)
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
        $('#register_name').val('');
        $('#register_email').val('');
        $('#register_password').val('');
        $('#confirmpassword').val('');        
    })
}

function login(email, password){
    $.ajax({
        url: `${serverUrl}/users/login`,
        method: 'POST',
        data: {
            email, password
        }
    })
    .done((success) => {
        Swal.fire({
            position: 'center',
            type: 'success',
            title: `Welcome ${success.name}`,
            showConfirmButton: false,
            timer: 1500
          })
        localStorage.setItem('token', success.token)
        localStorage.setItem('id', success.id)
        localStorage.setItem('name', success.name)
        localStorage.setItem('email', success.email)
        userLogin(success.name)
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

function signOut() {
    // var auth2 = gapi.auth2.getAuthInstance();
    // auth2.signOut().then(function () {
    //   console.log('User signed out.');
    // });
    userLogout();
  }


function userLogin(name){
    $('#notif-success').hide()
    $('#createRepo_form').hide()
    $('#register_page').hide()
    $('#login_page').hide()
    $('#content_page').slideDown()
    $('#login_email').val('');
    $('#login_password').val('');
    $('.logout_link').show()
    $('.login_link').hide()
    $('.register_link').hide()
    $('#listRepo').empty()
    $('.userprofile').empty()
    $('.userprofile').append(`Hai, ${name}`)
    $('#login_email_valid').hide()
    $('#login_email_empty').hide()
    listHeroesDota()
}

function userLogout(){
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('picture')
    $('#login_email_empty').hide()
    $('#login_email_valid').hide()
    $('#login_email').val('');
    $('#login_password').val('');
    $('.login_link').show()
    $('.register_link').show()
    $('.userprofile').empty()
    $('#register_page').hide()
    $('#login_page').show()
    $('#content_page').hide()
    $('#starred_link').addClass('active')
    $('#createRepo_form').hide()
    $('#notif-success').hide()
    $('#login_email_valid').hide()
    $('#login_email_empty').hide()
    $('.logout_link').hide()
    $('#register_email_empty').hide()
    $('#register_email_valid').hide()  
    
}