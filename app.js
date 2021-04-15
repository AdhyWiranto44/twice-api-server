const express = require('express');
const data = require('./twice.js');

const app = express();

app.get('/', (req, res) => {
    res.send(data);
})

app.get('/members', (req, res) => {
    res.send(data.members);
})

app.get('/discography', (req, res) => {
    res.send(data.discography);
})

app.get('/discography/:region', (req, res) => {
    let region = req.params.region;
    
    switch(region) {
        case "korean":
            res.send(data.discography.korean);
            break;
        case "japanese":
            res.send(data.discography.japanese);
            break;
        default:
            res.send("Invalid request data!");
    }
})

app.get('/sources', (req, res) => {
    res.send(data.sources);
})

app.listen(process.env.PORT || 3000, () => console.log("http://localhost:3000"));