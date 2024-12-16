import { URL_BACKEND } from "./env";

const url = URL_BACKEND;

async function register(){
    let nametag = document.getElementById("user").value;

    
    try{

        const response = await fetch(url+'/user/register', {
            method: 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body:JSON.stringify({
                'nametag':nametag
            })
        });

        if(response.ok){
            window.location.assign('../auth/login.html');
        }
    }catch(err){
        console.error('Error registrando al usuario', err);
    }
}