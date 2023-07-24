import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    ingredients : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    disponible : {
        type : Boolean,
        default : true,
        required : true
    },
    etablissement : {
        type : String,
        required : true
    },
    cataegorie : {
        type : String,
        required : true
    },
    medias : {
        type : Array,
        required : false
    },
    slug : {
        type : String,
        required : true
    }
})

const menu = mongoose.model('menus', menuSchema)
export default menu