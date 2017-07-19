require('../registerBabel');
const request = require('supertest');

describe('loading express', function () {
    let server;

    beforeEach(function () {
        server = require('../server');
    });

    afterEach(function (done) {
        server.close(done);
    });

    it('responds to /', (done)=> {
        request(server)
            .get('/getUser')
            .expect(200, done);
    });
    /*it('404 everything else', function testPath(done) {
        request(server)
            .get('/user')
            .expect(404, done);
    });*/
});
