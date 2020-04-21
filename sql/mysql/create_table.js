var sql=require('mysql2');


var connection= sql.createConnection(
{

host:'localhost',
database:'newdb',
user:'abhi',
password:'29233576'
}
)

connection.query(

`CREATE TABLE  IF NOT EXISTS persons(

id INTEGER  AUTO_INCREMENT PRIMARY KEY  ,
name VARCHAR(50) NOT NULL,
age INTEGER NOT NULL,
city VARCHAR(20)

)`,

function(err,result){

if(err){
    console.error(err);
}

else{
    console.log("table created sucessfully");
}

connection.close();

}
)







