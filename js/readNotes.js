import { getNameTag } from "./readTagname.js";
import { URL_BACKEND } from "./env.js";

var notes = [];
var position = 0;
const url = URL_BACKEND +'/note';

async function getNotes() {
    try{
        let nametag = getNameTag();
        
        const response = await fetch(url+'/read', {
            method: 'GET',
            headers: {
                'Content-type':'application/json',
                'nametag':nametag
            }
        });
    
        if(response.ok){
           const result = await response.json(); 
           console.log(result);
           notes = result.notes;
           setNote();
        }else{
            document.getElementById('note').innerText = 'No se encontraron notas para con el usuario registrado'
        }
        
        
    }catch(err){
        console.log(err);
        document.getElementById('note').innerText = 'Error obteniendo las notas';
    }
}

function setNote(){
    if(notes[position]){
        document.getElementById('note').innerText = notes[position].message_note;
        markNote(notes[position].id_note);
        position++;
        
    }else{
        document.getElementById('note').innerText = 'No hay más notas que revisar por hoy';
    }
    
}


async function markNote(id_note) {
    try{
        const response = await fetch(url+'/reviewNote', {
            method: 'put',
            headers: {
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                'id_note':id_note
            })
        });
    }catch(err){
        console.error(err)
    }

}

getNotes();

window.setNote = setNote;

