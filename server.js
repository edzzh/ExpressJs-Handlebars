const express = require('express');
var path = require('path');
var handlebars = require('express-handlebars');
var app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
	var requestData = {
		identity: req.query.identity,
		address: req.query.address
	}
	var templateData = {
		year: new Date().getFullYear(),
		article: 'Template will be right in the <code>views/</code> folder and layouts need to be in the <code>views/layouts/</code> folder'
	}
	res.render('home', templateData);
});

var server = app.listen(port, () => {
	var port = server.address().port;
	console.log('App running on http://localhost:%s', port);
});
