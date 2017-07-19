var user = {
    insert:'INSERT INTO userInfo(username,name,age,sex,phone,email,remark) VALUES(?,?,?,?,?,?,?)',
    // update:'update user set name=?, age=? where id=?',
    deleteByUserName: 'delete from userInfo where username=?',
    queryByUserName: 'select * from userInfo where username=?',
    queryAll: 'select * from userInfo'
};

module.exports = user;