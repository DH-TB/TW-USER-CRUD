require('../registerBabel');
const server = require('../server');
const request = require('supertest');

const $sql = require('../routes/userSqlMapping');
const connection = require('../routes/conf');

describe('unit test loading express', ()=> {
    let id;
    const user = {
        username: 'huanglizhen',
        name: 'hhh',
        age: 21,
        sex: 'girl',
        phone: '15091671302',
        email: '929659475@qq.com',
        remark: 'dh'
    };
    beforeEach((done)=> {
        connection.query(`delete from userInfo`, (err, result) => {
            connection.query($sql.insert, [user.username, user.name, user.age, user.sex, user.phone, user.email, user.remark], (err, result)=> {
                id = result.insertId;
                user.id = id;
                done();
            });
        });

    });
    afterEach((done)=> {
        connection.query($sql.delete, id, (err, result)=> {
            done();
        });
    });
    it('response to /getUser', (done)=> {
        request(server.listen())
            .get('/getUser')
            .expect(200,[user],done);
    });
});
