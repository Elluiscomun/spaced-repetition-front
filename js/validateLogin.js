function validateLogin(){
    let cookies = document.cookie.split(';');
    
    let user = cookies.filter(
        cookie => cookie.trim().startsWith('nametag')
    );
    
    if(user.length===0){
        window.location.assign('../auth/login.html');       
    }
}

validateLogin();