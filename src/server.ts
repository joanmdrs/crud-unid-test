import app from "./app";
import connectToDataBase from "./database";

connectToDataBase();

app.listen(3001, () => {
    console.log('Server running on port 3001');
})