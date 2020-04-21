var mysql=require('mysql2');

var connection=mysql.createConnection(
    {

host:'localhost',
database:'newdb',
user:'abhi',
password:'29233576'


    }
)

// function createtable(){

//     connection.query(

//         `CREATE TABLE  IF NOT EXISTS persons(
        
//         id INTEGER  AUTO_INCREMENT PRIMARY KEY  ,
//         name VARCHAR(50) NOT NULL,
//         age INTEGER NOT NULL,
//         city VARCHAR(20)
        
//         )`,
        
//         function(err,result){
        
//         if(err){
//             console.error(err);
//         }
        
//         else{
//             console.log("table created sucessfully");
//         }
        
    
        
//         }
//         )
        





// }










function getAllPersons () {

    return new Promise(function (resolve, reject) {
        connection.query(
            `SELECT * FROM persons`,
            function(err, rows, cols) {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            }
        )
    })
}




function insertpersons(name,age,city){

return new Promise(function(res,rej){

connection.query(
` INSERT INTO persons(name,age,city) VALUES (?,?,?)`,
[name,age,city]
,

function(err,result){

    if(err){
        rej(err);
    }
else{
    res();
}

}
)
})
}


 module.exports={
    getAllPersons,
    insertpersons
    
    
    

}