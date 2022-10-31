const mongoose = require('mongoose')

// 1. schema design

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
        enum: {
            values: ["kg", "liter", "pcs"],
            message: "unit value can't be {VALUE}, must be kg/liter/pcs"
        }

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
            values: ["in-stock", "out-of-stock", "discontinued"],
            message: "Status can't be {VALUE}"
        }


    },
    // supplier: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Supplier"
    // },
    // categories: [
    //     {
    //         name: {
    //             type: String,
    //             required: true
    //         },
    //         _id: mongoose.Schema.Types.ObjectId,
    //     }
    // ]
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



// Mongoose middleware 


productSchema.pre('save', function (next) {

    console.log("Before saving data");
    if (this.quantity === 0) {
        this.status = "out-of-stock"
    }
    next();

})

productSchema.post('save', function (doc, next) {

    console.log("After saving data");

    next();
})


// Mongoose Instance Methods

productSchema.methods.logger = function () {

    console.log(`Data saved for ${this.name} . from logger(Mongoose instance methods)`);
}





// 2. MODEL 

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

