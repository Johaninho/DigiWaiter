import exp from "constants";
import mongoose from "mongoose";

const mediaSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    restaurant : {
        type : String,
        required : true
    }
})

const medias = mongoose.model('medias', mediaSchema)
export default medias