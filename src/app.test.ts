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

describe('API Integration Tests', () => {
  it('GET / should return 200 and success message', async () => {
    const response = await request(app).get('/');

    // Status Code မှန်မမှန် စစ်မယ်
    assert.strictEqual(response.status, 200);

    // Response Body ထဲက စာသား မှန်မမှန် စစ်မယ်
    assert.deepStrictEqual(response.body, { message: 'CI is working!' });
  });

  it('GET /non-existent should return 404', async () => {
    const response = await request(app).get('/abc');
    assert.strictEqual(response.status, 404);
  });
});
