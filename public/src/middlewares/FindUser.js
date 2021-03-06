import request from 'superagent';

export default store=>next=>action=>{
    switch (action.type){
        case 'GET_ALL_USER':
            request.get('/getUser')
                .end((err,res)=>{
                    next({type:'GET_USER_INFO',content:res.body})
                });
            break;
        case 'GET_ONE_USER':
            request.get(`/getOneUser/${action.username}`)
                .end((err,res)=>{
                    next({type:'GET_USER_INFO',content:res.body})
                });
            break;
        case 'GET_MODIFY_USER':
            request.get(`/getModifyUser/${action.id}`)
                .end((err,res)=>{
                    next({type:'GET_ONE_USER_INFO',content:res.body})
                });
            break;
    }
    next(action);
}