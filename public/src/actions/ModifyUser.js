const modifyUser = (username,name,age,sex,phone,email,remark)=>{
    return{
        type:'MODIFY_USER',
        username,name,age,sex,phone,email,remark
    }
};

module.exports={
    modifyUser
};
