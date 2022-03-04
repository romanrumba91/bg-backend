const mongoose = require("mongoose")

//SCHEMA
const walletSchema = mongoose.Schema({

    nameWallet: {
        type: String,
        required: true,
    },
    imageWallet: {
        type: String,
        required: true,
        unique:true
    },
    descriptionWallet: {
        type: String,
        required: true,
        unique:true
    },
    priceWallet: {
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
const Wallet = mongoose.model("Wallet", walletSchema)

//EXPORTACION
module.exports = Wallet