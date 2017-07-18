const getAllUser =()=>{
    return {
        type:'GET_ALL_USER',
    }
};
const getOneUser = (username)=>{
    return {
        type:'GET_ONE_USER',
        username
    }
};
module.exports={
    getAllUser,
    getOneUser
};