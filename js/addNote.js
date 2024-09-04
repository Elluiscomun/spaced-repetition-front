import { getNameTag } from "./readTagname.js";

const url = 'https://spaced-repetition-q5zu.onrender.com/api/v1/note';

async function createNote() {
    const note = document.getElementById('note').value;

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
                'message':note
            })
        });

        if(response.ok){
            document.getElementById('note').value ='';
        }
    }catch(err){
        console.err('Error añadiendo la nota');
    }
}

window.createNote = createNote;