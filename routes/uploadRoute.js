const imageUpload = require('./../controllers/images/uploadImage')

module.exports = (app) =>{
    app.route('/admin/upload/')
        .post(imageUpload)
    
    }