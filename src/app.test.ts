import { describe, it } from 'node:test';
import assert from 'node:assert';
import request from 'supertest';
import app from './app.ts';

describe('App Tests', () => {

    it('should return 200 OK and "CI is working!" message for GET /', async () => {
        const response = await request(app).get('/');

        assert.strictEqual(response.status, 200);
        assert.deepStrictEqual(response.body, { message: 'CI is working!' });
    });

});
