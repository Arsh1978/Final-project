import {NotesModel} from '../models/notes-schema.js';
export const notecontroller = {
    async submitNote(request,response){
        const noteObject = request.body;
        try{
            const doc = await NotesModel.create(noteObject);
            // console.log("Note Created",body);
            response.json({message:"Note Created","note":doc});
        }
        catch(err){
            response.json({message:"Error in Note Creation"});
        }
    },
    updateNote(request,response){
    },
    deleteNote(request,response){
    },
    getNote(request,response){
        
    }
}
