const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const ejs = require('ejs')

//menampilkan file ejs
app.set('view engine', 'ejs')

app.use(express.static('public'));



app.use(bodyParser.json())

app.get('/login', (req, res) => {
    res.render('pages/login'); // Render tampilan EJS dalam folder 'home'
  });





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

