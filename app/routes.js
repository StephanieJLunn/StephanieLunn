module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/', function(req, res) {
		res.render("default");
	});
	
	//Obtain the specific landing pages
	app.get('/', function(req,res) { res.sendfile('./public/index.html')});
	app.get('/about', function(req,res) { res.sendfile('./public/views/about.html')});
	app.get('/hci', function(req,res) { res.sendfile('./public/views/hci.html')});

	//Prior app.get
	/*
		app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
	*/
};