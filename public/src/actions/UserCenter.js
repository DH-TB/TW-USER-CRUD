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
const deleteOneUser = (username)=>{
    return {
        type:'DELETE_ONE_USER',
        username
    }
};
const getModifyUser = (username)=>{
    return {
        type:'GET_MODIFY_USER',
        username
    }
};
module.exports={
    getAllUser,
    getOneUser,
    deleteOneUser,
    getModifyUser
};