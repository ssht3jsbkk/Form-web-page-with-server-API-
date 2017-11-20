const express = require(`express`);
const mongoose = require(`mongoose`)
const formidable = require(`express-formidable`)
const app = express();
const path = require("path");
const fs = require("fs");
const PORT = 3000;

app.use(formidable());

app.get(`/`, function(req, res) {
  res.sendFile(path.join(__dirname, 'form.html'));
})

const formschema = {
  title: String,
  name: String,
  email: String,
  number: Number,
  password: String,
  country: String
}

var Form = mongoose.model('forms', formschema);

app.post('/', function(req, res) {
  fs.appendFile(path.join(__dirname, 'data.json'), JSON.stringify(req.fields, null, ' '), function(error) {
    if (error === ' ') {
      console.log("error on the write");
    } else {
      res.send("Thank you for visiting on a typical British weather day!")
    }
  })
})

app.post('/forms', function(req, res){
  var signup = req.fields;
  var signupToSave = new Form(form);
  signupToSave.save(function (err, savedform) {
    if (err){
      return res.send('not saved');
    }
    res.send(savedform);
  });
})

app.listen(PORT, function() {
  console.log(`I'm listening on ${PORT}`);
})
