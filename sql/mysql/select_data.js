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

`SELECT * FROM persons `,

function(err,row,column){

if(err){
    console.error(err);
}

else{
    console.log(row);
    console.log(column);
}

connection.close();

}
)







