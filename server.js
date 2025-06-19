const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('.'));

app.get('/index.html', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/problems.html', (req, res) => res.sendFile(path.join(__dirname, 'problems.html')));
app.get('/About.html', (req, res) => res.sendFile(path.join(__dirname, 'About.html')));
app.get('/contacts.html', (req, res) => res.sendFile(path.join(__dirname, 'contacts.html')));


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});