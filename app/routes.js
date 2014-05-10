
module.exports = function(app) {

	// application -------------------------------------------------------------
	app.get('/app1', function(req, res) {
		res.sendfile('./public/view/calculator.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

	app.get('/app2', function(req, res) {
		res.sendfile('./public/view/showorder.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

	app.get('/app3', function(req, res) {
		res.sendfile('./public/view/contacts.html'); // load the single view file (angular will handle the page changes on the front-end)
	});


};
