import express from 'express';
const router = express.Router();

router.use('/',require('./user'));

module.exports = router;