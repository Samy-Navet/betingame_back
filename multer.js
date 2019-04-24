const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/images/'+req.body.filecategory);

    },

    filename: (req, file, cb) =>{
        cb(null,file.name)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    }
    else
    {
        cb(null, false)
    }
}
const upload = multer({ 
    storage,
    limits: {
        fileSize: 1024 * 1024 * 3
    },
    fileFilter
})

module.exports = upload;