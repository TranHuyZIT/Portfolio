require('dotenv').config;
const express = require('express');
const cors = require('cors');
const path = require('path');
const contactRouter = require('./router/contactRoute')

const app = express();
// Creating middleware
app.use(express.json());
app.use(cors());

app.use('/', contactRouter);
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req,res)=>(
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    ))
}

const port = process.env.PORT || 5000;
app.listen(port, console.log('Server listening at port 5000'));