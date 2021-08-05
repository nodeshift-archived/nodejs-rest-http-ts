import * as assert from 'assert';
import request from 'supertest';

import app from '../src/app';

describe('Greeting route', () => {
  it('with no query param', async () => {
    const { body } = await request(app)
      .get('/api/greeting')
      .expect('Content-Type', /json/)
      .expect(200);

    assert.strictEqual(body.content, 'Hello, World!');
  });

  it('with a query param', async () => {
    const { body } = await request(app)
      .get('/api/greeting?name=Luke')
      .expect('Content-Type', /json/)
      .expect(200);

    assert.strictEqual(body.content, 'Hello, Luke');
  });
});
