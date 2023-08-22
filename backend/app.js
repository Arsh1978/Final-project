import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const server = app.listen(1234, err=>{
    if(err){
        console.log('Server Crash ', err);
    }
    else{
        console.log('Server Up and Running ', server.address().port);
    }
})