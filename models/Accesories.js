const mongoose = require("mongoose")

//SCHEMA
const accesoriesSchema = mongoose.Schema({

    nameAccesories: {
        type: String,
        required: true,
    },
    imageAccesories: {
        type: String,
        required: true,
        unique:true
    },
    descriptionAccesories: {
        type: String,
        required: true,
        unique:true
    },
    priceAccesories: {
        type: Number,
        required: true,
    },
    color:{
        type:String,
        required: true
    }
},{
    timestamp: true
}

)

//MODELO
const Accesories = mongoose.model("Accesories", accesoriesSchema)

//EXPORTACION
module.exports = Accesories