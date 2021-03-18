const express = require('express');
const cors = require('cors');
const app = express();
const posts = require('./app/posts');
const fileDb = require('./fileDb');

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

fileDb.init();

const port = 8000;

app.use('/posts', posts);

app.listen(port, ()=>{
    console.log('server started on ' + port);
});