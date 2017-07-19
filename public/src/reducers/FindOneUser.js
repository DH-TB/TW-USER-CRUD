const FindOneUser = (state = {}, action)=> {
    switch (action.type){
        case 'GET_ONE_USER_INFO':
            return action.content
    }
    return state;
};

export default FindOneUser