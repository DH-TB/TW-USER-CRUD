import express from 'express';

const router = express.Router();

router.use('/',require('./UserInfo'));

module.exports = router;