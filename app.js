const express = require("express")
const app = express()
const rates = require("./rates")


app.listen(process.env.PORT || 8080, 
	() => console.log("Server is running..."));



app.get('/api/rates', (req, res) => {
    res.json(rates.getRates())
    res.status(204).send()
})
