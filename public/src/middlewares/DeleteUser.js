import request from 'superagent';

export default store=>next=>action=>{
    switch (action.type){
        case 'DELETE_ONE_USER':
            request.delete(`/deleteUser/${action.username}`)
                .end((err,res)=>{
                    console.log(res);
                    store.dispatch({type:'GET_ALL_USER'});
                });
            break;
    }
    next(action);
}