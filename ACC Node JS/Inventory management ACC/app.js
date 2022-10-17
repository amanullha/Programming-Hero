const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();



// middleware

app.use(express.json());
app.use(cors());


// schema design

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this product'],
        trim: true,// remove font and back space 
        unique: [true, "Name must be unique"],
        minLength: [3, "Name must be at least 3 characters"],
        maxLength: [100, "Name is too large"],
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price can't be negative"]
    },

    unit: {
        type: String,
        required: true,
        // enum: {
        //     value:["kg", "liter", "pcs"],
        //     message:"unit value can't be {VALUE}, must be kg/liter/pcs"
        // }

    },
    quantity: {
        type: Number,
        required: true,
        min: [0, "Quantity can't be negative"],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                return isInteger ? true : false;
            }
        },
        message: "Quantity must be an integer"

    },
    status: {
        type: String,
        required: true,
        enum: {
            value: ["in-stock", "out-of-stock", "discontinued"],
            message: "Status can't be {VALUE}"
        }


    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier"
    },
    categories: [
        {
            name: {
                type: String,
                required: true
            },
            _id: mongoose.Types.ObjectId,
        },
    ]
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // }
    // , updatedAt: {
    //     type: Date,
    //     default: Date.now
    // }


}, {
    timestamps: true
})


app.get('/', (req, res) => {
    res.send("Route is working! YAY!")
})


module.exports = app;