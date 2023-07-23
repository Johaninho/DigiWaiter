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
    slug : {
        type : String,
        required : true
    },
    note : {
        type : Number,
        required : false
    },
    medias : {
        type : Array,
        require : true
    },
    id_groupe : {
        type : String,
        require : true
    }
})

const Restaurant = mongoose.model('restaurants', restaurantSchema)
export default Restaurant