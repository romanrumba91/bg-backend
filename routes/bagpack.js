const express			= require("express")
const router			= express.Router()

const bagpackController 	= require("./../controllers/bagpackController")

// 2. ROUTER
// A. HOME
router.get("/", bagpackController.getBagpacks)

router.post("/create", bagpackController.createBagPack)




// 3. EXPORTACIÓN
module.exports = router