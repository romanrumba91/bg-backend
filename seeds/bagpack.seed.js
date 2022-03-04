const mongoose		= require("mongoose")
const BagPack			= require("../models/BagPack")
const connectDB		= require("../config/db")

require("dotenv").config()

connectDB()


const bagpack = [
    { nameBagPack: "Timberland", imageBagPack: "https://i.postimg.cc/T2LFKzyS/mochila1.png", descriptionBagPack: "Mochila de viajero con piel", priceBagPack: "5320", color:"brown" },
    { nameBagPack: "Levis", imageBagPack: "https://i.postimg.cc/Qt5zy5rD/mochila2.png", descriptionBagPack: "Mochila de mezclilla para hombre", priceBagPack: "1300", color: "blue" },
    { nameBagPack: "Bostanten", imageBagPack: "https://i.postimg.cc/YSF8rHDf/mochila3.png", descriptionBagPack: "Mochila de cuero genuino para mujer, estilo informal, para viajes universitarios", priceBagPack: "3300", color:"black" },
    { nameBagPack: "Samsonite", imageBagPack: "https://i.postimg.cc/ncw1qz6G/mochila4.png", descriptionBagPack: "Mochila clásica de cuero", priceBagPack: "3290", color: "brown" },
    { nameBagPack: "Herschel", imageBagPack: "https://i.postimg.cc/bNdxYPsD/mochila5.png", descriptionBagPack: "HERSCHEL Colección: haz clic en el logotipo de nuestra marca en la parte superior de la página * explorar la colección completa de Herschel Supply.", priceBagPack: "1530", color: "black" },
  ];

  const createBagPack = async (data) => {
 
    try {
        const createBagPack = await BagPack.create(data)

        console.log(createBagPack)

        // DESCONECTAR LA PETICIÓN A BASE DE DATOS
        return mongoose.connection.close()	

    } catch (error) {
        
        console.log(error)
        process.exit(1)

    }


}

createBagPack(bagpack)