//logic of app 

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');			//log 
var cookieParser = require('cookie-parser');
var indexRouter = require('./routes/index');
var db = require('./config/keys').mongoURI;

var mongoose = require('mongoose'); 

var address = require('./routes/address');
var fs = require('fs'); 
 //Database key 
mongoose.connect(db)
.then(()=> console.Log('MongoDB connected. '))
.catch(err =>console.Log(err));				//connect to mongoDB
mongoose.Promise = global.Promise; 
fs.readdirSync(path.join(__dirname, '/models')).forEach((filename) => {
  require(path.join(__dirname, '/models/', filename));
});


var app = express();  //express handles request and responses 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

//app.use(logger('dev'));    //using morgan
//app.use(express.json());
app.use(bodyParser.json());  //body parser middleware 
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
//app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/address/', address);


/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); //continue and execution 
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});  */

app.use((req, res, next)=>{
	const err = new Error('Not Found'); 
	err.status = 404; 
	next(err);

});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
}); 


module.exports = app;
