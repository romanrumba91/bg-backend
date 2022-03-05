// ./index.js

// 1. IMPORTACIONES

const express		= require("express")
const app			= express()
const connectDB		= require("./config/db")
const cors = require("cors")

// 2. MIDDLEWARES
require("dotenv").config()
connectDB()
//nos permite hacer peticiones entre diferentes servidores
app.use(cors())

app.use(express.json({extended: true}))

// 3. RUTEO
app.use("/", require("./routes/index"))
app.use("/api/users", require("./routes/users"))


// 4. SERVIDOR
app.listen(process.env.PORT, () => console.log(`Servidor activo en puerto ${process.env.PORT}`))