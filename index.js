const express = require('express')
const app = express();
const port = 3000;
const path = require("path");
app.use("/ogg", express.static(path.join(__dirname, "ogg")));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get('/shaxx.json', (req, res) => res.sendFile(path.join(__dirname, "shaxx.json")));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))