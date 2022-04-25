const request = require('supertest');

const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });

  //   describe('/markets', () => {
  //     describe('GET', () => {
  //       it('responds with 200 status and application/json content type', () => {
  //         return request(server)
  //           .get('/markets')
  //           .expect('Content-Type', /application\/json/)
  //           .expect(200);
  //       });

  //       // For this test, you'll need to inspect the body of the response and
  //       // ensure it contains the markets list. Check the markets.dev.json file
  //       // in the dev database to get an idea of what shape you're expecting.
  //       it('markets from "DB" json are in body of response', async () => {
  //         const res = await request(server)
  //           .get('/markets')
  //           .expect('Content-Type', /application\/json/)
  //           .expect(200);
  //         expect(Array.isArray(res.body)).toEqual(true);
  //       });
  //     });

  //     describe('PUT', () => {
  //       const testMarketList = [
  //         {
  //           location: 'Test Location',
  //           cards: 3,
  //         },
  //       ];
  //       it('responds with 200 status and application/json content type', async () => {
  //         await request(server)
  //           .put('/markets')
  //           .send(testMarketList)
  //           .expect('Content-Type', /application\/json/)
  //           .expect(200);
  //       });

  //       it('responds with the updated market list', async () => {
  //         const res = await request(server).put('/markets').send(testMarketList);
  //         expect(res.body).toEqual(testMarketList);
  //       });

  //       it('responds to invalid request with 400 status and error message in body', async () => {
  //         const res = await request(server)
  //           .put('/markets')
  //           .send('Invalid Data!!')
  //           .expect(400);
  //         expect(res.body.error).toBeDefined();
  //       });
  //     });

  //   });
});