export function getNameTag(){
    let cookies = document.cookie.split(';');
        
    let cookie = cookies.filter(
        cookie => cookie.trim().startsWith('nametag')
    );
    
    
    return cookie[0].split('=')[1];
}

