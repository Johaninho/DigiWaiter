import mongoose from "mongoose";

const restaurantSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    mail : {
        type : String,
        required : true
    },
    tel : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : false
    },
    slug : {
        type : String,
        required : true
    },
    note : {
        type : Number,
        required : false
    }
})

const Restaurant = mongoose.model('restaurants', restaurantSchema)
export default Restaurant