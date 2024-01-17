const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("I am express")
})

app.get('/chickens', (req, res) => {
    res.send("I am a lot of chickens") // http://localhost:3000/chickens/ returns text in brackets
})

app.get("/chickens/:name", (req, res) => {
    // res.send(req.params) // http://localhost:3000/chickens/frank returns {"name": "frank"}
    res.send(req.query) //http://localhost:3000/chickens/frank?key=99 returns "key": "99" --> query comes after ? in url
})



app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

