const express = require('express')
const app = express()
const axios = require('axios')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '/book-search/build')))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/book-search/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname = '../book-search/build/index.html'));
    })
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/book-search/public/index.html'));
})

app.get('/', (req, res) => {
    res.send('Hello')
})

app.post('/search', async (req, res) => {
    let isbn = []

    let searchInput = req.body.title.split(' ').join('+')
    let response = await axios.get(`http://openlibrary.org/search.json?q=${searchInput}`)
    let result = response.data

    res.status(200).send(result.docs)
})

app.post('/isbn', async (req, res) => {
        let search = await axios.get(`https://openlibrary.org/api/volumes/brief/isbn/${req.body.isbn}.json`)
        let result = search.data
    
        res.status(200).send(result)    
    
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server listen on ${PORT}`))