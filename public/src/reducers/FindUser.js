const FindUser = (state = [], action)=> {
    switch (action.type){
        case 'GET_USER_INFO':
            return action.content
    }
    return state;
};

export default FindUser