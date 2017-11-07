var express = require('express');
var app = express();


//Requests(req) -- Response(res)
app.get('/', function(request, response){
    response.send('My First API');
});

app.listen(3000, function(){
    console.log("First API running on port 3000.") 
});