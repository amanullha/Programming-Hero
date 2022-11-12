const mongoose = require('mongoose')
const validator = require('validator')
const { ObjectId } = mongoose.Schema.Types

// 1. schema design

const productSchema = mongoose.Schema({
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
    }




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

