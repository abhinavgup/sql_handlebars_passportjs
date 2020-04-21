const express=require('express');

const server=express();

var db=require('./db');

server.set('view engine','hbs');



server.use(express.json());

server.use(express.urlencoded({extended:true}));




server.get('/',function(req,res){

db.getAllPersons()
 
.then(function(person){

    res.render('persons',{person});

})

.catch(function(err){
    res.send(err);
})


})


server.get('/add',function(req,res){

res.render('persons_add');

})


server.post('/add',function(req,res){

    db.insertpersons(req.body.name,req.body.age,req.body.city)
     
    .then(function(){
    
        res.redirect('/');
    
    })
    
    .catch(function(err){
        res.send(err);
    })
    
    
    })




server.listen(3000);
