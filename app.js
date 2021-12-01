if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }
const express = require('express')
const app = express()
const port = process.env.PORT || 3340

app.use((req, res) => {
    res.send(`listening on port ${port} ready for tsi site`)
})

app.use((err, req, res, next) => {
    console.log(err)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})