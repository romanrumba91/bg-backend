const mongoose		= require("mongoose")
const Accesories			= require("../models/Accesories")
const connectDB		= require("../config/db")

require("dotenv").config()

connectDB()


const accesories = [
    { nameAccesories: "Columbia", imageAccesories: "https://i.postimg.cc/CLHRV64B/acc1.png", descriptionAccesories: "Estilo Trinity - Cinturón de piel para hombre, para vaqueros, hebilla plateada", priceAccesories: "500", color:"brown" },
    { nameAccesories: "Timberland", imageAccesories: "https://i.postimg.cc/V6Rhww5Z/acc2.png", descriptionAccesories: "Cinturón reversible de piel clásica. Cinturón para Hombre", priceAccesories: "450", color: "brown" },
    { nameAccesories: "Dockers", imageAccesories: "https://i.postimg.cc/vHjNb3Hy/acc3.png", descriptionAccesories: "Cinturón casual de cuero para hombre", priceAccesories: "351", color:"brown" },
    { nameAccesories: "Toplive", imageAccesories: "https://i.postimg.cc/7Znt0DnH/acc4.png", descriptionAccesories: "Funda iPhone 11 Funda de Cuero Genuino de Cuero Genuino para iPhone 11 ", priceAccesories: "532", color: "brown" },
    { nameAccesories: "Mosiso", imageAccesories: "https://i.postimg.cc/W3GdbWPH/acc5.png", descriptionAccesories: "Funda Protectora Compatible con MacBook Air/Pro ", priceAccesories: "815", color: "white" },
  ];

  const createAccesories = async (data) => {
 
    try {
        const createAccesories = await Accesories.create(data)

        console.log(createAccesories)

        // DESCONECTAR LA PETICIÓN A BASE DE DATOS
        return mongoose.connection.close()	

    } catch (error) {
        
        console.log(error)
        process.exit(1)

    }


}

createAccesories(accesories)