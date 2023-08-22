import express, { response } from 'express';
import cors from 'cors';
import { noteRoutes } from './routes/notes-routes.js';




const app = express();


app.use(cors());
app.use(express.json());
app.use('/',noteRoutes);

app.use((request,response,next)=>{
    response.json({message:'Invalid URL'})
})

const server = app.listen(1234, err=>{
    if(err){
        console.log('Server Crash ', err);
    }
    else{
        console.log('Server Up and Running ', server.address().port);
    }
})