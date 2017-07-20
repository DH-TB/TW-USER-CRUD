require('../registerBabel');
const server= require('../server');
const request = require('supertest');

describe('unit test loading express',()=>{
   it('response to /getUser',(done)=>{
       request(server.listen())
           .get('/getUser')
           .expect(200, done);
   })
});
