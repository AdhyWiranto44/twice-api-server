const express = require('express');
const router = express.Router();
const data = require('../db/twice.js');

router.get('/all', (req, res) => {
    res.status(200).json({
        "message": "List of members and discographies",
        "data": data
    });
});

router.get('/members', (req, res) => {
    res.status(200).json({
        "message": "List of TWICE members",
        "data": data.members
    });
})

router.get('/discography', (req, res) => {
    res.status(200).json({
        "message": "List of all discography",
        "data": data.discography
    });
})

router.get('/discography/:region', (req, res) => {
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

router.get('/sources', (req, res) => {
    res.status(200).json({
        "message": "Sources",
        "data": data.sources
    });
})

module.exports = router;