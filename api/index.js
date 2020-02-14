const express = require('express');
const cors = require('cors');
const fileDb = require("./fileDb");
const thread = require('./app/thread');
const config = require('./config') ;
const app = express();

app.use(cors());

app.use(express.static('public'));

app.use('/thread',thread);

const run = async ()=>{
  await fileDb.init();
    app.listen(config.port,()=>{
        console.log('server started ' + config.port)
    })
};
run().catch(e =>{
   console.error(e)
});