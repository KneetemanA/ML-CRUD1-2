const { loadData } = require('../../data')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req,res) => {
	const products = loadData('products')

		res.render('products/listProducts' , {
			products,
			toThousand,
		})

}