var express = require('express');
var router = express.Router();
var url = require ('url');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

//posting to  all database that the purpose of these queries.

//posting into the clothes section
router.post('/clothing',function(req,res,next){
  try{}
  catch(ex){
    if (err){
      console.error("Internal Error"+ex);
      return next (ex);
    }
  }
});

//posting into the user name section
router.post('/users',function(req,res,next){
  try{}
  catch (ex){
    if (err) {
      console.error("Internal Error"+ex);
      return next (ex);
    }
  }
});


//posting into the tailors section
router.post('/tailors',function(req,res,next){
  try{}
  catch(ex){
    if (err) {
      console.error("Internal Error"+ex);
      return next (ex);
    }
  }
});

//posting into the database