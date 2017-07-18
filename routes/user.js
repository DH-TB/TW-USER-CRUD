import express from 'express';
const router = express.Router();

import userDao from './userDao';

router.get('/getUser', (req, res, next)=> {
    userDao.add(req, res, next);
});

module.exports = router;
