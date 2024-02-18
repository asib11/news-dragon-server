const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const news = require('./data/news.json');

// app.use(cors());
const corsConfig = {
    origin:[ 'https://news-dragon-eb23d.web.app','https://news-dragon-eb23d.firebaseapp.com'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsConfig))
app.options("", cors(corsConfig))

app.get('/', (req, res) => {
    res.send('Dragon is running')
});

app.get('/categories', (req, res) => {
    // console.log(categories);
    res.send(categories);
});

app.get('/news', (req, res) => {
    // console.log(news)
    res.send(news);
});

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews);
});
app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(news)
    } else {
        const categoryNews = news.filter(n => n.category_id === id)
        res.send(categoryNews);
    }
});

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
});