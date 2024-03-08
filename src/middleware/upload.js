const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req,file, cb) {
      cb(null, './public/images/products')
    },
    filename: function (req, file, cb) {
      const dynamicFile = file.dynamicFile  + '-' + Date.now() + path.extname(file.originalname)
      cb(null, dynamicFile)
    }
  })
  
  const dynamicFile = multer({ storage })

  module.exports = {
    dynamicFile
  }