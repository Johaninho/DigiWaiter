import mongoose from "mongoose";

const groupesSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    }
})

const groupes = mongoose.model('Groupes', groupesSchema)
export default groupes