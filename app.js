const express = require('express');
const data = require('./twice.js');

const app = express();

app.get('/', (req, res) => {
    res.send(data);
})

app.get('/q/:customParam', (req, res) => {
    let customParam = req.params.customParam;
    
    if (customParam === "members") {
        res.send(data.members);
    } else {
        res.send("Not a valid query!");
    }

})

app.listen(3000, () => console.log("http://localhost:3000"));