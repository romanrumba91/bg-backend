const mongoose = require("mongoose")

const userDataSchema = mongoose.Schema({

	name: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
    	},
	address: {
		type: String,
		required: true
	},
	country: {
		type: String,
		required: true
	},
    phone: {
		type: Number,
		required: true
	}, 	
		
})

const UserData = mongoose.model("UserData", userDataSchema)

module.exports = UserData