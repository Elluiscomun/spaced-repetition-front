function login(){
    let nametag = document.getElementById("user").value;
    let maxAge = 365 * 24 * 60 * 60;
    document.cookie = `nametag=${nametag}; Max-Age=${maxAge}; path=/`; 
    window.location.href= '../index.html';
}

function exit(){
    document.cookie = 'nametag=; Max-Age=0 ;path=/';
    window.location.href='auth/login.html'
}

function register(){
    window.location.assign('../auth/register.html');
}

