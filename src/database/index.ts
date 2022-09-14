import mongoose from 'mongoose';

export default function connectToDataBase() : void {
    mongoose.connect('mongodb://localhost:27017/mydb', {
        user: 'username',
        pass: 'password',
    }).then(() => {
        console.log('successfully connected to the database');
    }).catch(err => {
        console.log('error connecting to the database');
        process.exit();
    })
}
