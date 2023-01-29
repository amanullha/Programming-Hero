const mongoose = require('mongoose')
const validator = require('validator');
const { ObjectId } = mongoose.Types;

const supplierSchema = mongoose.Schema(
    {

        name: {
            type: String,
            required: [true, "Please provide a name"],
            trim: true,
            lowercase: true,
            minLength: [3, 'Name must be greater then or equal to 3'],
            maxLength: [100, "Name is to large"]
        },
        email: {
            type: String,
            validate: [validator.isEmail, "provide a valid email"],
            trim: true,
            lowercase: true,
            unique: true,
        },


        brand: {
            name: {
                type: String,
                trim: true,
                required: true,
            },
            id: {
                type: ObjectId,
                required: true,
                ref: "Brand"
            }
        },

        contactNumber: [
            {
                type: String,
                required: [true, "Please provide a contact number"],
                validate: {
                    validator: (value) => {
                        return validator.isMobilePhone(value);
                    },
                    message: "Please provide a valid phone number",
                }
            }
        ],
        emergencyContactNumber: [
            {
                type: String,
                required: [true, "Please provide a emergency contact number"],
                validate: {
                    validator: (value) => {
                        return validator.isMobilePhone(value);
                    },
                    message: "Please provide a valid emergency phone number",
                }
            }
        ],
        tradeLicenseNumber:
        {
            type:Number,
            required:[true,"Please provide your trade license number"]


        }
        ,
        presentAddress:{
            type:String,
            required:[true,"please provide your present address"]
        },
        permanentAddress:{
            type: String,
            required: [true, "please provide your permanent address"]
        },


        location: {
            type: String,
            required:true,
            lowercase: true,
            enum: {
                values: ["dhaka", "chattogram", "rajshahi", "sylhet", "khulna", "barishal", "rangpur", "mymenshing"],
                message: "{VALUE} is not a valid name"
            }

        },

        imageURL:{
            type:String,
            required:true,
            validate:[validator.isURL,"please provide a valid url"]
        },
        nationalIdImageURL:{
            type:String,
            required:true,
            validate:[validator.isURL,"please provide a valid url"]
        },
        status:{
            type:String,
            default:"active",
            enum:["active","in-active","discontinue"]
        } 


    },{
        timestamps:true
    }

)

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;


























