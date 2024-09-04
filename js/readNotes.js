import { getNameTag } from "./readTagname.js";

var notes = [];
var position = 0;
const url = 'https://spaced-repetition-q5zu.onrender.com/api/v1/note';

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
        markNote();
        position++;
        
    }else{
        document.getElementById('note').innerText = 'No hay más notas que revisar por hoy';
    }
    
}


async function markNote() {
    try{
        const response = await fetch(url+'/reviewNote', {
            method: 'put',
            headers: {
                'Content-type':'application/json'
            }
        });
    }catch(err){
        console.error(err)
    }

}

getNotes();

window.setNote = setNote;

