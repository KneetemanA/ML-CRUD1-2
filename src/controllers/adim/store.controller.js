const { loadData, saveData } = require('../../data')
// const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
    const products = loadData('products');
    const image = req.file;
    const { name, price, discount, category, description} = req.body;
    const newId = products[products.length -1].id + 1

    const productsNew = {
        id: +newId,
        name: name.trim(),
        price: +price,
        discount: +discount,
        category: category.trim(),
        description: description.trim(),
        image: image ? image.filename : p.image,
    }

    products.push(productsNew);
    saveData(products, 'products')

    res.redirect(`/products/detail/${newId}`)
}