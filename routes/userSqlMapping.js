var user = {
    insert:'INSERT INTO userInfo(username,name,age,sex,phone,email,remark) VALUES(?,?,?,?,?,?,?)',
    update:'update userInfo set name=?,age=?sex=?,phone=?,email=?,remark=? where username=?',
    delete: 'delete from userInfo where id=?',
    queryOne: 'select * from userInfo where username=?',
    queryById:'select * from userInfo where id=?',
    queryAll: 'select * from userInfo'
};

module.exports = user;