const express = require("express");
const path = require("path");
const fs = require("fs");
const port = process.env.PORT || 8000;
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const mongodb = require("mongodb");



app.use('/static', express.static('static'))    // For serving static files
app.use(express.urlencoded())



app.set('view engine', 'pug')                                  // Set the template engine as pug
// app.set('views', [path.join(__dirname, 'views'), path.join(__dirname, '/views/cont')]);


// app.locals.basedir = path.join(__dirname, './views');


//ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res)=>{
    const params ={ }
    res.status(200).render('contact.pug',params);
})
app.get('/TypeWriterEff1', (req, res)=>{
    const params ={ }
    res.status(200).render('./cont/TypeWriterEff1.pug',params);
})

app.get('/borderRadiiAni', (req, res)=>{
    const params ={ }
    res.status(200).render('./cont/borderRadiiAni.pug',params);
})

app.get('/skilBaranime', (req, res)=>{
    const params ={ }
    res.status(200).render('./cont/AnimateSkillBar.pug',params);
})
app.get('/portfolio2', (req, res)=>{
    const params ={ }
    res.status(200).render('./cont/Portfolio2.pug',params);
})
app.get('/textHover1', (req, res)=>{
    const params ={ }
    res.status(200).render('./cont/textHover1.pug',params);
})
app.get('/portfolio1', (req, res)=>{
    const params ={ }
    res.status(200).render('./cont/Portfolio1.pug',params);
})








app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
})
