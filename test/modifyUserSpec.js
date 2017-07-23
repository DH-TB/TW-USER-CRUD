require('../registerBabel');
const server = require('../server');
const request = require('supertest');

const connection = require('../routes/conf');
const $sql = require('../routes/userSqlMapping');

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
        connection.query($sql.insert, [user.username, user.name, user.age, user.sex, user.phone, user.email, user.remark], (err, result)=> {
            id = result.insertId;
            done();
        });
    });
    afterEach((done)=> {
        connection.query($sql.delete, id, (err, result)=> {
            done();
        });
    });
    it('response to /modifyUser', (done)=> {
        request(server.listen())
            .put('/modifyUser')
            .send({
                "id": id,
                "username": 'qqqqqqqq',
                "name": 'hhh',
                "age": 21,
                "sex": 'gril',
                "phone": '15091671302',
                "email": '929659475@qq.com',
                "remark": 'dh'
            })
            .expect(200, {code: 200, msg: '修改成功'}, done);
    })
});
