const express = require('express');
const data = require('./twice.js');

const app = express();

app.get('/', (req, res) => {
    res.sendFile("./index.html", {root: __dirname});
})

app.get('/api/all', (req, res) => {
    res.status(200).json({
        "message": "List of members and discographies",
        "data": data
    });
})

app.get('/api/members', (req, res) => {
    res.status(200).json({
        "message": "List of TWICE members",
        "data": data.members
    });
})

app.get('/api/discography', (req, res) => {
    res.status(200).json({
        "message": "List of all discography",
        "data": data.discography
    });
})

app.get('/api/discography/:region', (req, res) => {
    let region = req.params.region;
    
    switch(region) {
        case "korean":
            res.status(200).json({
                "message": "List of korean releases",
                "data": data.discography.korean
            });
            break;
        case "japanese":
            res.status(200).json({
                "message": "List of japanese releases",
                "data": data.discography.japanese
            });
            break;
        case "english":
            res.status(200).json({
                "message": "List of english releases",
                "data": data.discography.english
            });
            break;
        default:
            res.status(400).json({
                "message": "Invalid data request!",
                "data": []
            });
    }
})

app.get('/api/sources', (req, res) => {
    res.status(200).json({
        "message": "Sources",
        "data": data.sources
    });
})

app.use("*", (req, res) => {
    res.status(400).json({
        "message": "Invalid data request!",
        "data": []
    });
})

app.listen(process.env.PORT || 3000, () => console.log("http://localhost:3000"));