const request = require('supertest');
const app = require('../app');

test("GET /cities debe retornar status 200", async () => {
  const res = await request(app).get('/cities');
  expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
});

test("POST /cities debe crear una ciudad", async () => {
  const city = {
    name: "Bogota",
    country: "Colombia",
    isCapital: true,
  };
  const res = await request(app).post('/cities').send(city);
  expect(res.status).toBe(201);
  // expect(res.body.id).toBeDefined();
  expect(res.body).toHaveProperty('id');
});
