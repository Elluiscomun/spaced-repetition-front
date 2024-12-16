import { getNameTag } from "./readTagname.js";
import { URL_BACKEND } from "./env.js";

const url = URL_BACKEND + "/note"

async function createNote() {
    const note = document.getElementById('note').value;
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if(!note || note===''){
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
    }
}

window.createNote = createNote;