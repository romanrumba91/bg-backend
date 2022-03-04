const mongoose = require("mongoose")

const userLoginSchema = mongoose.Schema({

	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	confirmpassword: {
		type: String,
		required: true

	}, 	
		
},	{
	timestamps: true
	}

)

const UserLogin = mongoose.model("UserLogin", userLoginSchema)

module.exports = UserLogin