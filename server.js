const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/MyPortfolio'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname + '/dist/MyPortfolio/index.html'));
});

app.listen(process.env.PORT || 4200);
