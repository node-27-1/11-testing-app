const request = require('supertest');
const app = require('../app');

let id;

test("GET /products debe retornar status 200", async () => {
  const res = await request(app).get('/products');
  expect(res.status).toBe(200);
});

test("POST /products debe crear un producto", async () => {
  const product = {
    name: "playstation",
    price: 500,
    category: "Videogames",
  }
  const res = await request(app).post('/products').send(product);
  id = res.body.id;
  expect(res.status).toBe(201);
  expect(res.body.id).toBeDefined();
});

test("PUT /products/:id debe actualizar un producto", async () => {
  const productUpdated = {
    name: "playstation updated"
  }
  const res = await request(app).put(`/products/${id}`).send(productUpdated);
  expect(res.status).toBe(200);
  expect(res.body.name).toBe(productUpdated.name);
});

test("GET /products/:id debe traer un producto", async () => {
  const res = await request(app).get(`/products/${id}`);
  expect(res.status).toBe(200);
  expect(res.body.id).toBeDefined();
});
test("GET /products/:id con id que no existe debe retornar 404", async () => {
  const res = await request(app).get(`/products/-1`);
  expect(res.status).toBe(404);
});

test("DELETE /products/:id debe eliminar un producto", async () => {
  const res = await request(app).delete(`/products/${id}`);
  expect(res.status).toBe(204);
});
