const { loadData } = require("../../data");

module.exports = (req,res) => {

const {id} = req.params;
const products = loadData('products')
const findProd = products.find(p => p.id === +id)

    res.render("admin/product-edit-form", {products: findProd})
}