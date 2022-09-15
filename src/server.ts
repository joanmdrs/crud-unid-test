import conn from "./database";
import app from "./app";

conn.then(async () => {
    app.listen(3001, () => {
        console.log('Server running on port 3001');
    });
}).catch(error => console.log('Server failed on started'));