/**
 * @api {delete} /match/:id Delete a match from the app
 * @apiName matchDelete
 * @apiGroup Match
 * @apiHeader {String} x-auth User unique token, ONLY admin token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "x-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2EzMTY5NjYyY2E3NzA5M2NjOTFmMjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0MTkyMDIyfQ.6pdnH28nqxj4jVVF90kwK41RQfuiPCMMm_j08BexmkA"
 *     }
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    
 *
 */
var {Match} = require('./../../Models/Match');

const matchDelete = (req,res) =>{
    var id = req.params.id;

     Match.deleteOne({_id: id}).then((result) =>{
         res.status(200).send();
     }).catch((err) =>{
         res.status(400).send();
     })
};

module.exports = matchDelete;