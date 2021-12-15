const Data = require("../data/data.json");

const findProduct = (id) => {
    let car = Data.find((obj) => obj.id === id);
    return car;
}


const findProducts = (idArr) =>{
    let products = [];
    for(id of idArr){
        products.push(findProduct(id))
    }
    return products;
}

module.exports = {findProduct , findProducts};