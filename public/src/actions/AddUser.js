const AddUser = (username,name,age,sex,phone,email,remark)=>{
    return{
        type:'ADD_USER',
        username,name,age,sex,phone,email,remark
    }
};

module.exports={
    AddUser
};