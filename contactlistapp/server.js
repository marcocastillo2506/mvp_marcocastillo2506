var express = require ('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res) {
  console.log("i recived a get request")
  person1 = {
    name: "Marco",
    email:"marcocastillo2506@gmail.com",
    number: 5513025563
  };

  person2 = {
    name:"Edgar",
    email:"edgargonzales1702@gmail.com",
    number: 5516035163
  };

  person3 = {
    name:"Alexis",
    email:"alexisgonzales0101@gmail.com",
    number: 5558971521
  };
  var contactlist = [person1, person2, person3];
  res.json(contactlist)
});

app.listen(3000);
console.log("Server running on port 3000");
