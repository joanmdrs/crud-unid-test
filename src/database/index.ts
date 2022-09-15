import mongoose from 'mongoose';

const conn = mongoose.connect('mongodb://localhost:27017/mydb', {
    user: 'username',
    pass: 'password',
});

conn.then( () => {
    console.log("Successful database connection");
}).catch(error => console.log('Failed connection to database'));

export default conn;


