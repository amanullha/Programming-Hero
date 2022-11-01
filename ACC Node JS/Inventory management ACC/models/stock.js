const mongoose = require('mongoose')
const validator = require('validator')
const { ObjectId } = mongoose.Schema.Types

// 1. schema design

const stockSchema = mongoose.Schema({

    productId: {
        type: ObjectId,
        ref: 'Product',
        required: true,

    }
    ,

    name: {
        type: String,
        required: [true, 'Please provide a name for this product'],
        trim: true,// remove font and back space 
        unique: [true, "Name must be unique"],
        lowercase: true,
        minLength: [3, "Name must be at least 3 characters"],
        maxLength: [100, "Name is too large"],
    },
    description: {
        type: String,
        require: true,
    },


    unit: {
        type: String,
        required: true,
        enum: {
            values: ["kg", "liter", "pcs", "bag"],
            message: "unit value can't be {VALUE}, must be kg/liter/pcs/bag"
        }

    },

    imageURLS: [
        {

            type: String,

            validate: (value) => {

                if (!Array.isArray(value)) {
                    return false;
                }

                let flag = true;

                value.forEach(url => {

                    if (!validator.isURL(url)) {
                        flag = false;
                    }
                })
                return flag;

            },
            massage: "Please enter a valid url"

        }
    ],

    price: {

        type: Number,
        required: true,
        min: [0, "Product price can't be negative"],
    },
    quantity: {

        type: Number,
        required: true,
        min: [0, "Product quantity can't be negative"],
    },



    category: {
        type: String,
        required: true,
    },

    brand: {
        name: {
            type: String,
            required: true,
        },
        id: {
            type: ObjectId,
            ref: "Brand",
            required: true,
        }
    },

    status: {

        type: String,
        required: true,

        enum: {
            values: ["in-stock", "out-of-stock", "discontinued"],
            message: "status can't be {VALUE} ",
        }

    },
    store: {
        name: {
            type: String,
            required: [true, 'Please provide a store name'],
            unique: true,
            trim: true,
            lowercase: true,
            enum: {
                values: ["dhaka", "chattogram", "rajshahi", "sylhet", "khulna", "barishal", "rangpur", "mymenshing"],
                message: "{VALUE} is not a valid name"
            }

        },
        id:{
            type:ObjectId,
            required:true,
            ref:"Store"
        }
    },
    suppliedBy:{
        name:{
            type:String,
            trim:true,
            required:[true,"Please provide a supplier name"]
        },
        id:{
            type:ObjectId,
            ref:"Supplier"
        }
    }





}, {
    timestamps: true
})



// Mongoose middleware 


stockSchema.pre('save', function (next) {

    console.log("Before saving data");
    if (this.quantity === 0) {
        this.status = "out-of-stock"
    }
    next();

})

stockSchema.post('save', function (doc, next) {

    console.log("After saving data");

    next();
})


// Mongoose Instance Methods

stockSchema.methods.logger = function () {

    console.log(`Data saved for ${this.name} . from logger(Mongoose instance methods)`);
}





// 2. MODEL 

const Stock = mongoose.model('Product', stockSchema);

module.exports = Stock;

