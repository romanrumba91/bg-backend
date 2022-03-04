const mongoose = require("mongoose")

//SCHEMA
const bagPackSchema = mongoose.Schema({

    nameBagPack: {
        type: String,
        required: true,
    },
    imageBagPack: {
        type: String,
        required: true,
        unique:true
    },
    descriptionBagPack: {
        type: String,
        required: true,
        unique:true
    },
    priceBagPack: {
        type: Number,
        required: true,
    },
    color: {
        type:String,
        required:true,
    }
},{
    timestamp: true
}

)

//MODELO
const BagPack = mongoose.model("BagPack", bagPackSchema)

//EXPORTACION
module.exports = BagPack