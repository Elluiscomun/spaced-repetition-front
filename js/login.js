function login(){
    let nametag = document.getElementById("user").value;
    let maxAge = 365 * 24 * 60 * 60;
    document.cookie = `nametag=${nametag}; Max-Age=${maxAge}; path=/`; 
    window.location.href= '../index.html';
}

