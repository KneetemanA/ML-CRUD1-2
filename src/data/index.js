const fs = require('fs');
const path = require('path')

module.exports = {
    loadData : (filenameJSON) =>{
        const products= JSON.parse(fs.readFileSync(path.join(__dirname, `./${filenameJSON}.json`), "utf-8"))
        
        return products
    },

    saveData: (data, filenameJSON) => { 
       const jsonData = JSON.stringify(data, null, 3); 
       fs.writeFileSync(path.join(__dirname, `./${filenameJSON}.json`), jsonData, 'utf-8');

    }

}
