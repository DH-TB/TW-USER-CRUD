import mongoose from 'mongoose';
import rawData from './raw-date/raw-data';
import UserInfo from '../models/UserInfo';

mongoose.Promise = require('bluebird');

const modelsMap = {
    UserInfo
};

let docs = Object.keys(rawData);

console.log(docs);


mongoose.connect('mongodb://localhost:27017/UserManage');

Object.keys(rawData).forEach(v => {
    modelsMap[v].remove(()=> {
        modelsMap[v].create(rawData[v], ()=> {
            docs = docs.filter(doc => doc !== v);
            console.log(`The data of ${v} created`);
            if (docs.length === 0) {
                console.log(`All data refreshed`);
                process.exit(0);
            }
        });
    });
});