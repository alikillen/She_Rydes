// importing supertest to test our routes
const request = require('supertest');

// Import your app - note the destructuring syntax.
// That will pull "app" as a standalone variable out of 
// the "exports" object from our server.js file.
// var {app} = require('../backend/server');

import app from "../backend/server.js"

// Homepage test.
describe('Home page route exists.', () => {
	it("Server 'homepage' can be viewed just fine.", async () => {
		const res = await request(app).get('/');
		expect(res.statusCode).toEqual(200);
	});
});