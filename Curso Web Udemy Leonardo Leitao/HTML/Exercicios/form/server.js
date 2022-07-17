const express = requiste('express')
const app = express()
const bodyParse = require('body-parser')

app.use(bodyParse.urlencoded({extended : true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('Parabens')
})

app.listen(5500)