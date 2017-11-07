var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
    {
        "id" : "1",
        "text" : "Eggs"
    },
    {
        "id" : "2",
        "text" : "Milk"
    },
    {
        "id" : "3",
        "text" : "Bread"
    },
    {
        "id" : "4",
        "text" : "Coke"
    }  
];


//Requests(req) -- Response(res)
app.get('/', function(request, response){
    response.send(ingredients);
});

app.post('/', function(request, response){
    var ingredient = request.body;
    if( !ingredient || ingredient.text===""){
        response.status(500).send({error: "Your ingredient must have a content."});
    } else{
        ingredients.push(ingredient);
        response.status(200).send(ingredients);
    }
});

app.listen(3000, function(){
    console.log("First API running on port 3000.");
});