const request = require('supertest');
const app = require('../app');

let id;

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
  id = res.body.id;
  expect(res.status).toBe(201);
  expect(res.body).toHaveProperty('id');
});

test("PUT /cities/:id debe actualizar una ciudad", async () => {
  const cityUpdated = {
    name: "Bogota updated",
  }
  const res = await request(app).put(`/cities/${id}`).send(cityUpdated);
  expect(res.status).toBe(200);
  expect(res.body.name).toBe(cityUpdated.name);
})

test("DELETE /cities/:id debe eliminar una ciudad", async () => {
  const res = await request(app).delete(`/cities/${id}`);
  expect(res.status).toBe(204);
});
