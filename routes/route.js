const express = require('express');
const Contact = require('../models/database');

const router = express.Router();



//fetch the data
router.get('/get', function(req, res){
    Contact.find({}, function(err, data){
       if(err){
           console.log(err);
       }else{
           res.json(data);
       }
   }) 
})

//posting the data
router.post('/post', function(req, res){
    let newcontact = new Contact({
        sno: req.body.sno,
        name: req.body.name,
        address: req.body.address
    }) ;
 
      //console.log(newcontact.name);

    newcontact.save((err, data)=>{
        if(err){
            res.json({msg: "failed to save"});
        }else{
             res.json({msg: "successfully saved"});
        }
    });

   // console.log(req.body);
    //res.redirect('/');
});

//delete the detail
router.delete('/delete/:id', (req, res)=>{
    Contact.remove({_id: req.params.id}, function(err, data){
        
        if(err){
            res.json({msg: 'failed'})
        }else{
            res.json({msg:'deleted successfully'})
        }
        //console.log(data);
    });
    //console.log('clicked');
});

//edit
router.put('/edit', (req, res)=>{
    Contact.findById(req.body.id, (err, data)=>{
        if(err){
            res.json({errmsg: err});
        }
        data.sno= req.body.sno;
        data.name= req.body.name;
        data.address= req.body.address;

        data.save((err, data)=>{
            if(err){
                res.json({errmsg: err});
            }else{
                 res.json({msg: "successfully edited"});
            }
        });

    });
});

module.exports=router;