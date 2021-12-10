function getRates() {
    const min = 3.8796
    const max = 4.2934
    function generateRate(){
        return (Math.random() * (max-min)) +min;
    }

    const purchase_price = generateRate()
    const sale_price = (purchase_price + 0.0400)
    return {
        status: 200,
        purchase_price: purchase_price.toFixed(4),
        sale_price: sale_price.toFixed(4),
    }
}

module.exports = { getRates }