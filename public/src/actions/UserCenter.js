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
const deleteOneUser = (id)=>{
    return {
        type:'DELETE_ONE_USER',
        id
    }
};
const getModifyUser = (id)=>{
    return {
        type:'GET_MODIFY_USER',
        id
    }
};
module.exports={
    getAllUser,
    getOneUser,
    deleteOneUser,
    getModifyUser
};