import request from 'supertest';
import app from './app';

describe('GET /', () => {
    it('should return 200 and a success message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe('CI is working!');
    });
});