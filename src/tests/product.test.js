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

test("DELETE /products/:id debe eliminar un producto", async () => {
  const res = await request(app).delete(`/products/${id}`);
  expect(res.status).toBe(204);
});
