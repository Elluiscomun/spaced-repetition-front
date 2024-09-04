

function setGreeting(){
    const banner = document.getElementById('banner');
    const date = new Date();
    const hour = date.getHours();

    if(hour<12){
        banner.innerHTML = '¡Buenos días!<br>Revisa tus notas pendientes.';
    }

    if(hour>12 && hour<18){
        banner.innerHTML = '¡Buenas tardes!<br>Revisa tus notas del día.';
    }

    if(hour>18){
        banner.innerHTML = '¡Buenas noches!<br>Revisa tus notas del día.';
    }
}

setGreeting();