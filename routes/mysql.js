var mysql  = require('mysql');  
 
exports.connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123456',     
//   port: '3306',                   
  database: 'exl',
  multipleStatements: true
  // multipleStatements: true
}); 

