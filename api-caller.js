//const express = require('express');
import express from 'express'
import  WordCounter  from './api-controller.js'
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.text("Content-Type: text/html"))
app.listen(PORT, () => {
    console.log(`Server is live on http://localhost:${PORT}`);
});


app.post('/count', (req, res) => {
    res.status(200).send(WordCounter(req.body));
})













