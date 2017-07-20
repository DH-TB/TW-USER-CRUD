const modifyUser = (id,username,name,age,sex,phone,email,remark)=>{
    return{
        type:'MODIFY_USER',
        id,username,name,age,sex,phone,email,remark
    }
};

module.exports={
    modifyUser
};
