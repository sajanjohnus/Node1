const csvFilePath='customer-data.csv'
const csv=require('csvtojson')
var fs = require('fs');
const path = require('path')

 csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
        str=JSON.stringify(jsonObj);
   
        fs.writeFile(path.join(__dirname,'customer-data.json'),str, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
        }); 
    })
 