const route=require('express').Router();


let todo=[


{task:"first task"},
{task:"second task"}

]

route.get('/',function(req,res){


res.render("todo",{todo});  //  we have to send todo array at todo file

})


route.post('/',function(req,res){


    todo.push({

   task:req.body.newtodo

    })
    res.redirect('todo');

    })

    module.exports=route