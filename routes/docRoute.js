const path = require('path');
module.exports = (app) =>{
app.route('/doc')
    .get((req,res)=>{    
        res.sendFile(path.resolve(__dirname + '/../doc/index.html'));
    })
}
    

