import express from 'express';
const router = express.Router();

import userDao from './userDao';

router.get('/getUser', (req, res, next)=> {
    userDao.queryAll(req, res, next);
});
router.get('/getOneUser/:username',(req,res,next)=>{
   userDao.queryByUserName(req,res,next);
});
router.delete('/deleteUser/:username',(req,res,next)=>{
    userDao.deleteByUserName(req,res,next);
});
router.post('/addUser',(req,res,next)=>{
   userDao.add(req,res,next);
});
module.exports = router;
