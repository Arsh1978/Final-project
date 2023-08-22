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
        response.json({message:'Question Updated'});
    },
    deleteNote(request,response){
        response.json({message:'Question Removed'});
    },
    async getNote(request,response){
        try{
            const docs = await NotesModel.find({}).exec();
            response.json({message:'All Records ', records: docs});
            }
            catch(err){
                console.log('Error in Questions ', err);
                response.json({message:'Error in Questions '});
            }

    }
}
