import { describe, it, before, after } from 'node:test';
import assert from 'node:assert';
import request from 'supertest';

import app from './app.js';
import { prisma } from "./helper/dbHelper.js";

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



describe('Database Integration Tests', () => {

    // Test မစခင် Database ထဲက Data ဟောင်းတွေ ရှင်းမယ်
    before(async () => {
        // test ဆိုတဲ့ နာမည်နဲ့ ရှိပြီးသား role ကိုပဲ ရွေးဖျက်တာက ပိုစိတ်ချရပါတယ်
        await prisma.roles.deleteMany({
            where: { name: 'test' }
        });
    });

    it('should create a new user in the database', async () => {
        const result = await prisma.roles.create({
            data: { name: "test", description: "test" },
        });

        assert.strictEqual(result.name, 'test');

        // Database ထဲမှာ တကယ် ရှိမရှိ ပြန်စစ်မယ်
        const userInDb = await prisma.roles.findUnique({
            where: { name: 'test' },
        });
        assert.ok(userInDb);
    });

    // အလုပ်ပြီးရင် Prisma connection ပိတ်မယ်
    after(async () => {
        await prisma.$disconnect();
    });
});


