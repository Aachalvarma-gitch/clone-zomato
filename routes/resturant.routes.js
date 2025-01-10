const { updateInfo, getMenu, deleteMenu, updateMenu, addMenu } = require("../controllers/resturant.controller")
const { deleteMany } = require("../models/Resturant")

const router = require("express").Router()

router
    .post("/update-info", updateInfo)
    .post("/add-menu", addMenu)
    .get("/get-menu", getMenu)
    .delete("/delete-menu", deleteMenu)
    .put("/update-menu", updateMenu)


module.exports = router