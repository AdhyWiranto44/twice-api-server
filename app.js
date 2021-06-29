const express = require('express');
const cors = require('cors');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/api', require('./routes/api')); // Base endpoint
app.use(cors());

// Homepage
app.get('/', (req, res) => {
    res.render("index", {title: 'TWICE API', currentDate: new Date().getFullYear()});
})

// Send this if req other route
app.use("*", (req, res) => {
    res.status(404).json({
        "message": "Invalid data request!",
        "data": []
    });
})

app.listen(process.env.PORT || 4000, () => console.log("http://localhost:4000"));