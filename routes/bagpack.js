const express			= require("express")
const router			= express.Router()

const bagpackController 	= require("./../controllers/bagpackController")

// 2. ROUTER
// A. HOME
router.post("/all", bagpackController.getBagpacks)

router.post("/:id", bagpackController.selectedBagPack)




// 3. EXPORTACIÓN
module.exports = router