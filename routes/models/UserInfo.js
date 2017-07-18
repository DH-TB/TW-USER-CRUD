import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');

const UserInfo = mongoose.model('UserInfo',{
    username:String,
    name:String,
    age:Number,
    sex:String,
    phone:String,
    email:String,
    remark:String
});

export default UserInfo;