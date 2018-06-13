const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurYear', ()=>{
    return new Date().getFullYear();
});

app.set('view enginer','hbs');

app.use((req, res, next)=>{
    // res.send('<h1>Maintaing site.</h1?');
    next();
})

app.get('/', (req, res) => {
    res.send('Hi There!');
});

app.get('/about', (req, res) => {
    res.render('template.hbs',{str: 'This is about'})
})

app.listen(3000);