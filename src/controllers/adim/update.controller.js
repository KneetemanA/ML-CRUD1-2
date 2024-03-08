const {loadData, saveData } = require("../../data");

module.exports = (req, res)=> {
  let products = loadData('products');
  const {id} = req.params
  const image = req.file
  
  const { name, price, discount, category, description } = req.body

  const mappedProduct = products.map( p => {
    if(p.id === +id){
      const productsUpdate = {
        ...p ,
        id: +id,
        name: name.trim(),
        price: +price,
        discount: +discount || p.discount,
        category: category,
        description: description.trim(),
        image: image ? image.filename : p.image
          };
        
        if(image?.filename){
          const pathBefore = path.join(__dirname, '../../public/images' + p.image);
          const existsFile = fs.existsSync(pathBefore);

          if(existsFile){
            fs.unlinkSync()
          }
      }
    return productsUpdate
    }
    return p
  })
  products = mappedProduct
  saveData ( products,"products");

  res.redirect(`/products/detail/${+id}`);
};