const express = require('express');
const router = express.Router();
const cors = require('cors');
const data = require('../db/twice.js');

router.get('/all', cors({origin: true}), (req, res) => {
    res.status(200).json({
        "message": "List of members and discographies",
        "data": data
    });
    res.end();
});

router.get('/members', cors({origin: true}), (req, res) => {
    if (!req.query.slug) {
        res.status(200).json({
            "message": "List of TWICE members",
            "data": data.members
        });
    } else {
        try {
            let i = 0;
            let found = false;
            while(i < data.members.length || found === false) {
                if (data.members[i].slug === req.query.slug) {
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
    }
    res.end();
})

router.get('/discography', cors({origin: true}), (req, res) => {
    res.status(200).json({
        "message": "List of all discography",
        "data": data.discography
    });
    res.end();
})

router.get('/discography/korean', cors({origin: true}), (req, res) => {
    if (!req.query.slug) {
        res.status(200).json({
            "message": "List of korean discography",
            "data": data.discography.korean
        });
    } else {
        try {
            let i = 0;
            let found = false;
            while(i < data.discography.korean.length || found === false) {
                if (data.discography.korean[i].slug === req.query.slug) {
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
    }
    res.end();
})

router.get('/discography/japanese', cors({origin: true}), (req, res) => {
    if (!req.query.slug) {
        res.status(200).json({
            "message": "List of japanese discography",
            "data": data.discography.japanese
        });
    } else {
        try {
            let i = 0;
            let found = false;
            while(i < data.discography.japanese.length || found === false) {
                if (data.discography.japanese[i].slug === req.query.slug) {
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
    }
    res.end();
})

router.get('/discography/english', cors({origin: true}), (req, res) => {
    if (!req.query.slug) {
        res.status(200).json({
            "message": "List of english discography",
            "data": data.discography.english
        });
    } else {
        try {
            let i = 0;
            let found = false;
            while(i < data.discography.english.length || found === false) {
                if (data.discography.english[i].slug === req.query.slug) {
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
    }
    res.end();
})

router.get('/sources', cors({origin: true}), (req, res) => {
    res.status(200).json({
        "message": "Sources",
        "data": data.sources
    });
    res.end();
})

module.exports = router;