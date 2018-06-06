let express = require ('express');
let router = express.Router();
let url = require ('url');

//get home page
router.get('/',function(req,res,next){
    res.render('index',{title:'SKYTECH'});
});

module.exports = router;

//getting all clothes
router.get('/clothes',function(req,res,next){
    try{
        //assigning the request to a query string
        let query = url.parse(req.url,true).query;
        console.log(query);

        //connecting to the database and getting the information
        req.getConnection(function(err,conn){
            //checking for an error
            if (err) {
                console.error("SQL Connection Error:",err);
                return next (err);
            }else {
                conn.query("",function(err,rows,fields){
                    if (err) {
                        console.error("SQL error",err);
                        return next(err);
                    }
                    let resEmp = [];
                    for (let clothIndex in rows){
                        let clothObj = rows[clothIndex];
                        resEmp.push(clothObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    }
    catch(ex){
        console.error("Internal Error"+ex);
        return next (ex);
    }
});

//getting african wear
router.get('africanwear',function(req,res,next){
    try{
        let query = url.parse(req.url,true).query;
        console.log(query);

        req.getConnection(function(err,conn){
            if (err){
                console.error("SQL Connection Error:",err);
                return next (err);
            }
            else {
                conn.query("",function(err,rows,fields){
                    if (err) {
                        console.error("SQL error",err);
                        return next (err);
                    }
                    let resEmp = [];
                    for (let clothIndex in rows){
                        let clothObj = rows[clothIndex];
                        resEmp.push(clothObj);
                    }
                    res.json(resEmp);
                });
            }
        })
    }
    catch(ex){
        console.error("Internal error"+ex);
        return next (ex);
    }
});

//get blouse informaton
router.get('blouses',function(req,res,next){
    try{
        req.getConnection(function(err,conn){
            if (err) {
                console.error("SQL Connection error:",err);
                return next (err);
            }
            let resEmp=[];
            for (let clothIndex in rows){
                let clothObj = rows[clothIndex];
                resEmp.push(clothObj);
            }
            res.json(resEmp);
        });
    }
    catch(ex){
        console.error("Internal Error",+ex);
        return next (ex);
    }
});

//get batakari information
router.get('/bakatari',function(req,res,next){
   try{
       let query = url.parse(req.url,true).query;
       console.log(query);
       req.getConnection(function(err,conn){
           if (err) {
               console.error("SQL COnnection Error",err);
               return next (err);
           }
           else {
               conn.query("",function(err,row,fields){
                   if (err) {
                       console.error("SQL error",err);
                       return next(err);
                   }
                   let resEmp = [];
                   for (let clothIndex in rows){
                       let clothObj = rows[clothIndex];
                       resEmp.push(clothObj);
                   }
                   res.json(resEmp);
               });
           }
       });
   }
   catch(ex){
       console.error("Internal error"+ex);
       return next (ex);
   }
});

//get suit information
router.get('/suits',function(req,res,next){
    try{
        let query = url.parse(req.url,true).query;
        console.log(query);

        req.getConnection(function(err,conn){
            if (err){
                console.error("SQL Connection Error",err);
                return next (err);
            }
            else{
                conn.query("",function(err,row,fields){
                    if (err){
                        console.error("SQL Error",err);
                        return next (err);
                    }
                    let resEmp=[];
                    for (let clothIndex in rows){
                        let clothObj = rows[clothIndex];
                        resEmp.push(clothObj);
                    }
                    res.render(resEmp);
                });
            }
        });
    }
    catch(ex){
        console.error("Internal error"+ex);
        return next (ex);
    }
});

//get bridal information
router.get('/bridal',function(req,res,next){
   try{
       let query = url.parse(req.url,true).query;
       console.log(query);

       req.getConnection(function(err,conn){
           if (err){
               console.error("SQL Connection Error",err);
               return next (err);
           }
           else{
               conn.query("",function(err,rows,fields){

               });
           }
       });
   }
   catch(ex){
       console.error("Internal error"+ex);
       return next (ex);
   }
});

//get information from kids
router.get('/kids',function(req,res,next){
   try{

   }
   catch(ex){
       console.error("Internal Error"+ex);
       return next (ex);
   }
});

//get dashiki information
router.get('/dashiki',function(req,res,next){
    try{

    }
    catch(ex){
        console.error("internal error"+ex);
        return next (ex);
    }
});

//get bags information
router.get('/bags',function(req,res,next){
    try{

    }
    catch(ex){
        console.log("Internal error"+ex);
        return next (ex);
    }
});

//get embroidery information
router.get('/embroidery',function(req,res,next){
    try{

    }
    catch(ex){
        console.error("Internal error"+ex);
        return next (ex);
    }
});