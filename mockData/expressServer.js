var express = require('express');
var app = express();
var router = express.Router();




app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,qptoken");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});


router.all('/*', function(req, res){

  /*res.status(500).json({ error: 'message' });*/

  res.json({
    "code": 10000,
    "message": "ok",
    "data": {
      a: 1,
      b: 2
    }
  });


});
app.use(router);


app.listen(8389, function () {
    console.log('mockServer is Listening on 8389');
});