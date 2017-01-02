var express = require('express')
var app = express()

//forgot what this does but do it anyway
app.disable('x-powered-by')

// set static html as view engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// set node port
app.set('port',process.env.PORT || 4200)
// set root dir
app.use(express.static(__dirname + '/public'))

// send index.html on empty request
app.get('/', function(req, res){
	res.render("index")
})

// listen for requests on specified port
app.listen(app.get('port'),function(){
	console.log('server started on http://localhost:' + app.get('port'))
})
