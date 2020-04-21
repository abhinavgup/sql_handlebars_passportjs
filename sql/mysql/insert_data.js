var sql=require('mysql2');


var arr={

name :process.argv[2],
age :parseInt(process.argv[3]),
city :process.argv[4]     

}



var connection= sql.createConnection(
{

host:'localhost',
database:'newdb',
user:'abhi',
password:'29233576'
}
)

connection.query(

`INSERT INTO persons(name,age,city) VALUES(

 ' ${arr.name}',

  ${arr.age} ,

 ' ${arr.city}'

)`,

function(err,result){

if(err){
    console.error(err);
}

else{
    console.log(result);
}

connection.close();

}
)







