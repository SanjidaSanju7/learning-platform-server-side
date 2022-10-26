const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('Educational API is Running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const selectedCategory = categories.filter(category => category.id === id);
    res.send(selectedCategory)
})


app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course.id === id);
    res.send(selectedCourse)
})



app.listen(port, () => {
    console.log('Educational Server running on port', port);
})