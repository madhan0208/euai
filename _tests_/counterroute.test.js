const request = require('supertest');
const express = require('express');
const counterRoutes = require('../Routes/counterroute');

// Mock the websocket 
jest.mock('../websocket', () => ({
  setupWebSocket: {
    broadcast: jest.fn()
  }
}));

const app = express();
app.use(express.json());
app.use('/api/counter', counterRoutes);

describe('Counter API', () => {
  it('should return the current counter value', async () => {
    const res = await request(app).get('/api/counter');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('value');
    expect(typeof res.body.value).toBe('number');
  });

  it('should increment the counter', async () => {
    const res = await request(app).post('/api/counter/increment');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('value');
    expect(typeof res.body.value).toBe('number');
  });

  it('should return test message', async () => {
    const res = await request(app).get('/api/counter/test');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe('Testing');
  });
});
