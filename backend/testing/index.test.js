const request = require('supertest');

describe('Home page route exists.', () => {
	it("Server 'homepage' can be viewed just fine.", async () => {
		const res = await request(app).get('/');
		expect(res.statusCode).toEqual(200);
	});
});


var {app} = require('../server/index');