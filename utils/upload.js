const multer = require("multer")

const storage = multer.diskStorage({
    filename: (req, file, cb) => { cb(null, file.originalname) },
    // destination: () => { }
})
const resturantUpload = multer({ storage }).fields([
    { name: "certificate", maxCount: 1 },
    { name: "hero", maxCount: 1 }
])
const menuUpload = multer({ storage }).array("image")
const updatemenuUpload = multer({ storage }).single("image")

module.exports = { resturantUpload, menuUpload, updatemenuUpload }

