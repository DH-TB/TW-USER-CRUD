import express from 'express';
const router = express.Router();

import userDao from './userDao';

router.get('/getUser', (req, res, next)=> {
    userDao.queryAll(req, res, next);
});
router.get('/getOneUser/:username',(req,res,next)=>{
   userDao.queryOne(req,res,next);
});
router.delete('/deleteUser/:id',(req,res,next)=>{
    userDao.deleteById(req,res,next);
});
router.post('/addUser',(req,res,next)=>{
   userDao.add(req,res,next);
});
router.get('/getModifyUser/:username',(req,res,next)=>{
    userDao.queryByUserName(req,res,next);
});
router.put('/modifyUser',(req,res,next)=>{
    userDao.modify(req,res,next);
});


module.exports = router;
