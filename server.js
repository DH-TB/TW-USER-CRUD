import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static('./public'));
app.use(require('./routes/index'));

const server = app.listen(3000,()=>{
    const port = server.address().port;
   console.log("listening on " + port);
});