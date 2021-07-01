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

router.get('/members/:slug', (req, res) => {
    try {
        let i = 0;
        let found = false;
        while(i < data.members.length || found === false) {
            if (data.members[i].slug === req.params.slug) {
                res.status(200).json({
                    "message": "Found TWICE member information",
                    "data": data.members[i]
                });
                found = true;
            }
            i++;
        }
    } catch (err) {
        res.status(404).json({
            "message": "Member not found!",
            "data": []
        });
    }
})

router.get('/discography', (req, res) => {
    res.status(200).json({
        "message": "List of all discography",
        "data": data.discography
    });
})

router.get('/discography/korean', (req, res) => {
    res.status(200).json({
        "message": "List of korean discography",
        "data": data.discography.korean
    });
})

router.get('/discography/korean/:slug', (req, res) => {
    try {
        let i = 0;
        let found = false;
        while(i < data.discography.korean.length || found === false) {
            if (data.discography.korean[i].slug === req.params.slug) {
                res.status(200).json({
                    "message": "Found specific Korean release",
                    "data": data.discography.korean[i]
                });
                found = true;
            }
            i++;
        }
    } catch (err) {
        res.status(404).json({
            "message": "Data not found!",
            "data": []
        });
    }
})

router.get('/discography/japanese', (req, res) => {
    res.status(200).json({
        "message": "List of japanese discography",
        "data": data.discography.japanese
    });
})

router.get('/discography/japanese/:slug', (req, res) => {
    try {
        let i = 0;
        let found = false;
        while(i < data.discography.japanese.length || found === false) {
            if (data.discography.japanese[i].slug === req.params.slug) {
                res.status(200).json({
                    "message": "Found specific Japanese release",
                    "data": data.discography.japanese[i]
                });
                found = true;
            }
            i++;
        }
    } catch (err) {
        res.status(404).json({
            "message": "Data not found!",
            "data": []
        });
    }
})

router.get('/discography/english', (req, res) => {
    res.status(200).json({
        "message": "List of english discography",
        "data": data.discography.english
    });
})

router.get('/discography/english/:slug', (req, res) => {
    try {
        let i = 0;
        let found = false;
        while(i < data.discography.english.length || found === false) {
            if (data.discography.english[i].slug === req.params.slug) {
                res.status(200).json({
                    "message": "Found specific English release",
                    "data": data.discography.english[i]
                });
                found = true;
            }
            i++;
        }
    } catch (err) {
        res.status(404).json({
            "message": "Data not found!",
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