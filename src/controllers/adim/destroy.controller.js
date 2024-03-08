const { loadData, saveData } = require("../../data")

module.exports = (req,res) => {
    const {id} = req.params
    const products = loadData('products')

    const deleteProducts = products.filter(p => p.id !== +id)
    
    saveData(deleteProducts, "products")

    res.redirect ('/')
}