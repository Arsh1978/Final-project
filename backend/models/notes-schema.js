import { SchemaTypes } from "mongoose";
import mongoose from "../utils/db/connection.js";

const Schema = mongoose.Schema;

const notesSchema = new Schema({
    "title": {type: SchemaTypes.String, required: true},
    "description": {type: SchemaTypes.String, required: true}
});

export const NotesModel = mongoose.model('notes', notesSchema);