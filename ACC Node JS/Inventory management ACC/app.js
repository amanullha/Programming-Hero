const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();

const productRoute=require('./routes/product.route')



// middleware

app.use(express.json());
app.use(cors());



// MONGOOSE STRUCTURE
// SCHEMA -> MODEL-> QUERY



app.get('/', (req, res) => {
    res.send("Route is working! YAY!")
})


app.use('/api/v1/product', productRoute )




module.exports = app;