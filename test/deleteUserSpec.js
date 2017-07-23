require('../registerBabel');
const server = require('../server');
const request = require('supertest');
const connection = require('../routes/conf');
const $sql = require('../routes/userSqlMapping');

describe('unit test loading express', ()=> {
    let id;
    beforeEach((done)=> {
        connection.query($sql.insert, ['huanglizhen', 'hhh', 21, 'gril', '15091671302', '929659475@qq.com', 'dh'], (err, result)=> {
            id = result.insertId;
            done();
        });
    });
    it('response to /deleteUser', (done)=> {
        request(server.listen())
            .delete(`/deleteUser/${id}`)
            .expect(200, {code: 200, msg: '删除成功'},done);
    })
});
