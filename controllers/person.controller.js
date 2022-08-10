const Product = require("../models/person.model")
module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body)
    .then((newProduct) => res.json(newProduct))
    .catch((err) =>console.log(err));
    }
};

