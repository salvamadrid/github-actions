const request = require('supertest');
const app = require('./app');

describe('API Tests', () => {
    test('GET /api/status should return status OK', async () => {
        const response = await request(app).get('/api/status');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('OK');
        expect(response.body.timestamp).toBeTruthy();
    });
});