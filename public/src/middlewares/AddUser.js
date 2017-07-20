import request from 'superagent';

export default store=>next=>action=>{
    switch (action.type){
        case 'ADD_USER':
            request.post('/addUser')
                .send({
                    "username":action.username,"name":action.name,
                    "age":action.age,"sex":action.sex,
                    "phone":action.phone,"email":action.email,
                    "remark":action.remark
                })
                .end((err,res)=>{
                    store.dispatch({type:'GET_ALL_USER'})
                });
            break;
    }
    next(action);
}