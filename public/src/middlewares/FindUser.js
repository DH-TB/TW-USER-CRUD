import request from 'superagent';

export default store=>next=>action=>{
    switch (action.type){
        case 'GET_ALL_USER':
            request.get('/getUser')
                .end((err,res)=>{

                })
    }
    next(action)
}