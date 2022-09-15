import app from "../../src/app";
import conn from "../../src/database";
import request from "supertest";

let server : any;

beforeEach(async () => {
    (await conn).connect;
    server = app.listen(3001);
    
})

afterEach(async () => {
    (await conn).disconnect;
    server.close();
});

it('simple test',async () => {
    const response = await request(app).get('/getAll');
    expect(response.statusCode).toEqual(200);
})