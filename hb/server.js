const express=require('express');

const server=express();

const route=require('./routes/todo');

server.set('view engine','hbs');
// server.set('views', './views');



server.use(express.json());

server.use(express.urlencoded({extended:true}));


server.use('/todo',route);

// server.use('/public',express.static(__dirname + '/public'));

server.listen(3000);


// create html pages on server and send them to client side

//With Handlebars, you can separate the generation of HTML from the rest of your JavaScript

// so if your js in not working on your browser  then also yout html can easily load 

// render pages from server and send to client in form of html pages