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

exports.getBag = async (req, res) => {

    const {id}=req.params
    const foundEdit = await BagPack.findById(id)

    res.json({
		msg: "Se ha editado una mascota correctamente",
		data: foundEdit
	})

}

exports.getEditBagForm = async (req, res) => {

    //NECESITO EL ID DEL LIBRO PARA EDITAR
    const {id}=req.params
    //DATOS DEL FORMULARIO NUEVOS CON LOS CUALES VOY A ACTUALIZAR
    const { nameBagPack, imageBagPack, descriptionBagPack, priceBagPack, color }  = req.body
    //actualizar base de datos
    const updateOrders = await BagPack.findByIdAndUpdate(
        id,{ nameBagPack, imageBagPack, descriptionBagPack, priceBagPack, color } ,
        {new:true}
    )

    // REDIRECCIONAR A LA PAGINA INDIVIDUAL DEL LIBRO
    res.json({
        msg: "Se ha editado una mascota correctamente",
        data: updateOrders,
      });
}

exports.deleteBag = async (req,res) => {

    const { id } = req.params

    try{

        const deletedBag = await BagPack.findByIdAndRemove(id)

        res.json({
            msg:"Se ha eliminado esta mochila",
            data: deletedBag
        })

    } catch (error) {

        console.log(error)

        
    }
}

