const express = require("express")
const app = express()
const cors = require('cors')
const rates = require("./rates")

app.use(cors())

app.listen(process.env.PORT || 8080, () => console.log("Server is running..."));


app.get('/api/rates', (req, res) => {
    res.json(rates.getRates())
    res.status(204).send()
})
