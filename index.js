var express = require('express'),
    formidable = require('formidable'),
    app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/upload', function(req, res){
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files){
    res.json({ filesize: files.upload.size/1000 + ' kb' })
  });
});

app.listen(process.env.PORT);