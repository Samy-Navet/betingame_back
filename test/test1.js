var {mongoose} = require('./../db/mongoose');
var {User} = require('./../Models/User');


// beforeEach(function() {
//     return User.remove({}).then(function() {
//         var username = 'tata';
//         var password = 'tata123';
//         var email = 'tata@gmail.com';

//         var user = new User({
//             username: username,
//             email: email,
//             password: password,
//             money: 500
//         });

//         if(typeof admin !== 'undefined' && admin != null){
//             user.admin = admin
//         }

//         user.save().then(() =>{
//             user.generateAuthToken()
//         }).then((data) =>{
//             return data;
//             // res.header('x-auth', data.token).send(user);
//         }).catch((e) => {
//             return e;
//             console.log(e);
//         })
//     });
// });

//   describe('register an user', function() {
//     it('should save a user and return it', function() {

//          User.find({}, function(err, res){
//             if(err) return done(err);
//             res.should.have.length(1);
//             done();
//          });
//     });
//   });

beforeEach(function() {
    return User.remove({});
  });

  describe('register an user', function() {
    it('should save a user and return it', function(done) {
        var username = 'tata';
        var password = 'tata123';
        var email = 'tata@gmail.com';

        var user = new User({
            username: username,
            email: email,
            password: password,
            money: 500
        });
        if(typeof admin !== 'undefined' && admin != null){
            user.admin = admin
        }

        user.save(done);
    });
});

