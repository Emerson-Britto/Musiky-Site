const express = require('express');
const path = require('path');

app = express();

const PORT = process.env.PORT || 3456;


app.route('/').get(function(req, res) {
    res.sendFile(path.join(__dirname + `/index.html`));
});

app.route('/css/*').get(function(req, res) {
    res.sendFile(path.join(__dirname + `/css/${req.params[0]}`));
});

app.route('/js/*').get(function(req, res) {
    res.sendFile(path.join(__dirname + `/js/${req.params[0]}`));
});

app.route('/assets/*').get(function(req, res) {
    res.sendFile(path.join(__dirname + `/assets/${req.params[0]}`));
});


app.listen(PORT, () => {
    console.log('Started: ' + new Date())
    console.log('port: ' + PORT)
})
