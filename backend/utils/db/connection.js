import mongoose from 'mongoose';
const URL = 'mongodb+srv://Harsh:123@cluster0.ulsesvq.mongodb.net/user-db?retryWrites=true&w=majority';
const promise = mongoose.connect(URL);
promise.then(data=>{
    console.log('DB Connection Done...');
}).catch(err=>{
    console.log('Error in DB Connection ', err);
})
export default mongoose;