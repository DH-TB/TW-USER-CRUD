import express from 'express';
const router = express.Router();

import userDao from './userDao';

router.get('/getUser', (req, res, next)=> {
    userDao.queryAll(req, res, next);
});
router.get('/getOneUser/:username',(req,res,next)=>{
   userDao.queryByUserName(req,res,next);
});

module.exports = router;
