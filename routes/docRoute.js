const path = require('path');
module.exports = (app) =>{
app.route('/')
    .get((req,res)=>{
        res.sendFile(path.resolve(__dirname + '/../home.html'));        
    });
    
app.route('/doc')
    .get((req,res)=>{    
        res.sendFile(path.resolve(__dirname + '/../doc/index.html'));
    })
}
    

