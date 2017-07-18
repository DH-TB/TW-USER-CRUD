import express from 'express';

const router = express.Router();

router.use('/',require('./queryUserInfo'));

module.exports = router;