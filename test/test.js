const assert = require('assert');
const http = require('http');

describe("Testing TWICE API", () => {
	before(() => {
		console.log("Starting . . .");
	});

	after(() => {
		console.log("Done testing all routes!");
	});

	context("Get Request", () => {
		beforeEach(() => {
			console.log("Executing each requests.");
		});

		it("GET /all", (done) => {
			http.get('http://localhost:3000/all', (response) => {
				assert.strictEqual(response.statusCode, 200);
				done();
			});
		});

		it("GET /members", (done) => {
			http.get('http://localhost:3000/members', (response) => {
				assert.strictEqual(response.statusCode, 200);
				done();
			});
		});

		it("GET /discography", (done) => {
			http.get('http://localhost:3000/discography', (response) => {
				assert.strictEqual(response.statusCode, 200);
				done();
			});
		});

		it("GET /discography/korean", (done) => {
			http.get('http://localhost:3000/discography/korean', (response) => {
				assert.strictEqual(response.statusCode, 200);
				done();
			});
		});

		it("GET /discography/japanese", (done) => {
			http.get('http://localhost:3000/discography/japanese', (response) => {
				assert.strictEqual(response.statusCode, 200);
				done();
			});
		});

		it("GET /discography/english", (done) => {
			http.get('http://localhost:3000/discography/english', (response) => {
				assert.strictEqual(response.statusCode, 200);
				done();
			});
		});
	});
});