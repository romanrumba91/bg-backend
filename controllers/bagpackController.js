const bcryptjs		= require("bcryptjs")
const mongoose		= require("mongoose")
const BagPack =  require("./../models/BagPack")


exports.getBagpacks = async (req, res) => {


	
		const allBag = await BagPack.find({})
		
        res.json({
            msg: "Se ha obtenido el listado de bebidas.",
            data: allBag
        })

}

exports.createBagPack = async (req, res) => {
	
	// FORMULARIO
	const { nameBagPack, imageBagPack, descriptionBagPack, priceBagPack, color } = req.body

	const newBagPack	= await BagPack.create({ nameBagPack, imageBagPack, descriptionBagPack, priceBagPack, color })

	res.json({
		msg: "Se ha creado una mascota correctamente",
		data: newBagPack
	})
	

}
