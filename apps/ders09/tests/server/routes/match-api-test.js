const request = require('supertest');
const app = require('../../../src/server/app');


test("Soruları çek", async () =>{

    const response = await request(app).get('/api/matches');
    // Login gerektiği için 401 hatası vermeli
    // expect(response.statusCode).toBe(200);
    // expect(response.body.length).toBe(3);
    expect(response.statusCode).toBe(401);

});