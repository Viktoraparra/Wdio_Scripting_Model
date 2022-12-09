import faker from '@faker-js/faker';

const { spec } = require('pactum');

const app = 'https://reqres.in';
const service = '/api/users';
const payload = {
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  job: faker.name.jobTitle(),
};

describe('Api Testing', async () => {
  it('should get random male users', async () => {
    const resp = await spec()
      .get('https://randomuser.me/api')
      .withHeaders('Content-Type', 'application/json')
      .withHeaders('Accept', 'application/json')
      //   .withAuth('my-username', 'super-secret-password')
      .withQueryParams('gender', 'male')
      .expectStatus(200)
      .expectJsonLike({
        results: [
          {
            gender: 'male',
          },
        ],
      });
    console.log(resp);
  });

  it('Post method', async () => {
    const vila = await spec()
      .post(app + service)
      .withHeaders('Content-Type', 'application/json')
      .withHeaders('Accept', 'application/json')
      .withJson(payload)
      .expectStatus(201)
      .retry({
        count: 2,
        delay: 2000,
        strategy: ({ res }) => {
          return res.statusCode === 201;
        },
      });
    console.log(vila);
  });
});
