const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const catagories = require('./catagories.json');

app.use(cors());
app.get('/', (req, res) =>{
    res.send('dragon is running');
});

app.get('/catagories', (req, res) =>{
    res.send(catagories);
})

app.listen(port, (req, res) =>{
    console.log(`server running: ${port}`)
})