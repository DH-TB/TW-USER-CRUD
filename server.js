const express = require('express');

const app = express();

app.use(express.static('./'));

const server = app.listen(3000,()=>{
    const port = server.address().port;
   console.log("listening on " + port);
});