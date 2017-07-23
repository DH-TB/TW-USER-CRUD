const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./public'));
app.use(require('./routes/user'));

const port = 3000;
// if (!module.parent) {
    app.listen(port, ()=> {
            console.log('listening on 3000');
        });
// }

module.exports = app;
