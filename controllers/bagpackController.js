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

exports.selectedBagPack= async (req, res) => {

    const {id} = req.params
    
      try {
        const selectedBagPack = await BagPack.findById(id);
    
        res.json({
          msg: "Selected successfully",
          data: selectedBagPack,
        });
      } catch (error) {
        console.log(error);
      }
    };