const express = require('express'); //require express.js
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); //best practice to use this on every file.. allows us to use nodemon from base directory

app.get('/', (req, res) => {
    res.render('home.ejs')  //can also just use 'home' since we referenced ejs in app.set
});

app.get('/cats', (req, res) => {
    const cats = [
        'Ralsei', 'Susie', 'Kris', 'Winton'
    ]
    res.render('cats', { cats });
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', { rand: num})  //can also just use 'home' since we referenced ejs in app.set
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit });
})


app.listen(3000, () => {  //setup server port to localhost:3000
    console.log("Listening on port 3000")
});