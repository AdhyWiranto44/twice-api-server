const assert = require('assert');
const http = require('http');

describe("Testing TWICE API Local", () => {
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

		it("GET /api/all", (done) => {
			http.get('http://localhost:4000/api/all', (response) => {
				assert.strictEqual(response.statusCode, 200);
				done();
			});
		});

		it("GET /api/members", (done) => {
			http.get('http://localhost:4000/api/members', (response) => {
				assert.strictEqual(response.statusCode, 200);
				done();
			});
		});

		it("GET /api/discography", (done) => {
			http.get('http://localhost:4000/api/discography', (response) => {
				assert.strictEqual(response.statusCode, 200);
				done();
			});
		});

		it("GET /api/discography/korean", (done) => {
			http.get('http://localhost:4000/api/discography/korean', (response) => {
				assert.strictEqual(response.statusCode, 200);
				done();
			});
		});

		it("GET /api/discography/japanese", (done) => {
			http.get('http://localhost:4000/api/discography/japanese', (response) => {
				assert.strictEqual(response.statusCode, 200);
				done();
			});
		});

		it("GET /api/discography/english", (done) => {
			http.get('http://localhost:4000/api/discography/english', (response) => {
				assert.strictEqual(response.statusCode, 200);
				done();
			});
		});
	});
});

describe("Testing TWICE API Hosted (twice-api.adhywiranto.xyz)", () => {
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

		it("GET /api/all", (done) => {
			http.get('http://twice-api.adhywiranto.xyz/api/all', (response) => {
				assert.strictEqual(response.statusCode, 200);
				done();
			});
		});

		it("GET /api/members", (done) => {
			http.get('http://twice-api.adhywiranto.xyz/api/members', (response) => {
				assert.strictEqual(response.statusCode, 200);
				done();
			});
		});

		it("GET /api/discography", (done) => {
			http.get('http://twice-api.adhywiranto.xyz/api/discography', (response) => {
				assert.strictEqual(response.statusCode, 200);
				done();
			});
		});

		it("GET /api/discography/korean", (done) => {
			http.get('http://twice-api.adhywiranto.xyz/api/discography/korean', (response) => {
				assert.strictEqual(response.statusCode, 200);
				done();
			});
		});

		it("GET /api/discography/japanese", (done) => {
			http.get('http://twice-api.adhywiranto.xyz/api/discography/japanese', (response) => {
				assert.strictEqual(response.statusCode, 200);
				done();
			});
		});

		it("GET /api/discography/english", (done) => {
			http.get('http://twice-api.adhywiranto.xyz/api/discography/english', (response) => {
				assert.strictEqual(response.statusCode, 200);
				done();
			});
		});
	});
});