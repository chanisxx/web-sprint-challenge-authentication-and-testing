// Write your tests here

const request = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');

const testUser = { username: "testing1", password: "testing1"};

describe('server.js', () => {
    describe ('GET REQUEST', () => {
        it('Should return a status code of 400 when not logged in', async () => {
            const res = await request(server).get('/api/jokes')
            expect(res.status).toBe(400);
        }) 
        it('Should return json', async () => {
            const res = await request(server).get('/api/jokes')
            expect(res.type).toBe('application/json')
        })
    })
    describe("Registering new user" , () => {
        // it("Should return with a status code of 201 when adding new user", async () => {
        //     await db("users").truncate() // clearing the tables
        //     const res = await request(server)
        //     .post("/api/auth/register")
        //     .send(testUser)
        //     expect(res.status).toBe(201)
        // })
        it("Should return a status of 500 with an invalid user", async () => {
            const res = await request(server)
            .post("/api/auth/register")
            .send({ user: "test", pass: "test" })
            expect(res.status).toBe(500)
        })
    })

    // describe('Login user', () => {
    //     it('Should return with a 200 status code', async () => {
    //         const res = await request(server)
    //         .post("/api/auth/login")
    //         .send(testUser);
    //         expect(res.status).toBe(200)
    //     })
    //     it('Should return with a 401 status code when given invalid creds', async () => {
    //         const res = await request(server)
    //         .post("/api/auth/login")
    //         .send({ username: "Doesn't exist", password: "Fake one" })
    //         expect(res.status).toBe(401)
    //     })
    // })
})
