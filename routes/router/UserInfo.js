import express from 'express';

const router = express.Router();

import UserInfo from '../models/UserInfo';

router.get('/getUser',(req,res,next)=>{
    UserInfo.find({},(err,data)=>{
        if(err){
            return next(err);
        }
        res.send(data);
    })
});

module.exports = router;
