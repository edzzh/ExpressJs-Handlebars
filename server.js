const express = require('express');
let exphbs = require('express-handlebars');

app.get('/', (req, res) => {
	res.send('Hello!');
});