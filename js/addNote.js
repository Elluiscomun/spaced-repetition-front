import { getNameTag } from "./readTagname.js";
import { URL_BACKEND } from "./env.js";

const url = URL_BACKEND + "/note"
let note = "";
let errorState = false;

async function createNote() {
    note = document.getElementById('note').value;
    document.getElementById('note').value = 'Cargando...'
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if(!note || note==='' || note=='Cargando...'){
        return;
    }

    try{
        const nametag = getNameTag();

        const response = await fetch(url+'/create', {
            method: 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body:JSON.stringify({
                'nametag':nametag,
                'message':note,
                'timeZone':userTimeZone
            })
        });

        if(response.ok){
            document.getElementById('note').value ='';
        }
    }catch(err){
        console.error('Error añadiendo la nota');
        document.getElementById('note').value = 'Error añadiendo nota: '+note +'\n Haz click en este recuadro e intenta nuevamente';
        errorState = true;
    }
}

function setNote(){
    if(note && errorState){
        errorState = false;
        document.getElementById('note').value = note
    }
}

window.createNote = createNote;
window.setNote = setNote;