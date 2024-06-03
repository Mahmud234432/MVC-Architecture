const products = require("../model/product.model");
const path = require('path');

exports.getproduct= (req, res) => {
    res.sendFile(path.join(__dirname + '/../view/index.html'));
}

exports.saveproduct= (req, res) => {
    const name = req.body.name;
    const price = Number(req.body.price);

    const product= {
        name,
        price
    };
    products.push(product);
    res.status(200).json({
        succes: true,
        products
    })
};