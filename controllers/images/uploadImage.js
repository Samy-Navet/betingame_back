const multer = require('multer');
const multerConfig = require('./../../multer');

const uploadImage = (req,res) =>{
    multerConfig.uploadImage(req, res, (err) =>{
        if(err instanceof multer.MulterError){
            res.send('Multer error : '+err)
        }
        else if(err)
        {
            res.send(err)
        }
    })
}

module.exports = uploadImage;

