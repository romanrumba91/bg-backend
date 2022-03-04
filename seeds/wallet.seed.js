const mongoose		= require("mongoose")
const Wallet 			= require("../models/Wallet")
const connectDB		= require("../config/db")

require("dotenv").config()

connectDB()


const wallet = [
    { nameWallet: "Herschel Black Design", imageWallet: "https://www.santafixie.com/en/media/catalog/product/cache/e716fc8f32d310560199b44cedc4c64b/h/e/herschel-roy-black-1_1.jpg", descriptionWallet: "Revestimiento de Nailon, Cierre de Capa de bloqueo RFID", priceWallet: "548", color:"black" },
    { nameWallet: "Tommy Hilfiger", imageWallet: "https://i.ebayimg.com/images/g/Yn0AAOSwNhNeRCVm/s-l640.jpg", descriptionWallet: "Logan Cartera triple con cremallera para hombre", priceWallet: "609", color: "black" },
    { nameWallet: "Scapinno", imageWallet: "https://images-na.ssl-images-amazon.com/images/I/81V%2BM17ZIbL._AC_SY550_.jpg", descriptionWallet: "Cartera De Piel Grabada Negro Unica", priceWallet: "1490", color:"black" },
    { nameWallet: "Timberland", imageWallet: "https://i.pinimg.com/564x/f2/65/d0/f265d0972762d67932dbd4c4e6375b86.jpg", descriptionWallet: "Portafolios de seguridad con bloqueo RFID de piel auténtica para hombre", priceWallet: "329", color: "brown" },
    { nameWallet: "Mont Blanc", imageWallet: "https://boutiquedosrelogios.pt/media/2021/05/128585.png", descriptionWallet: "Meisterstuck Azul Marino Buisness titular de la tarjeta", priceWallet: "548", color: "blue" },
  ];

  const createWallet = async (data) => {
 
    try {
        const createWallet = await Wallet.create(data)

        console.log(createWallet)

        // DESCONECTAR LA PETICIÓN A BASE DE DATOS
        return mongoose.connection.close()	

    } catch (error) {
        
        console.log(error)
        process.exit(1)

    }


}

createWallet(wallet)