var user = {
    // insert:'INSERT INTO user(id, name, age) VALUES(0,?,?)',
    // update:'update user set name=?, age=? where id=?',
    delete: 'delete from userInfo where username=?',
    queryByUserName: 'select * from userInfo where username=?',
    queryAll: 'select * from userInfo'
};

module.exports = user;