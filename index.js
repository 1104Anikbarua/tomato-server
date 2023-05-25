const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(cors());

const chefs = require('./data/chef.json')
const reviews = require('./data/reviews.json')

// get chef data 
app.get('/info', (req, res) => {
    res.send(chefs)
})

// get chef data by id 
app.get('/recipes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id)
    const searchChef = chefs?.find((chef) => chef?.id === id)
    // console.log(searchChef)
    res.send(searchChef)
})

// get user reviews
app.get('/reviews', (req, res) => {
    res.send(reviews)
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
