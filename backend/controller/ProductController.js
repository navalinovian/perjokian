const { Product,Category } = require("../models");


exports.productIndex = async (req, res) => {
    try {
        const products = await Product.findAll({
            include: [Category]
        })
        return res.json(products)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.errors)
    }
}


exports.productAll = async (req, res) => {
    try {
        const products = await Product.findAll({ paranoid: false })
        return res.json(products)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.errors)
    }
}

exports.productShow = async (req, res) => {
    const uuid = req.params.uuid
    try {
        const product = await Product.findOne({
            where: {
                id: uuid
            },
            include: [Category]
        })

        return res.json(product)
    } catch (error) {
        console.log(error);
        return res.status(404).json(error.errors)
    }
}

exports.productCreate = async (request, res) => {
    const { name, price, stock, category_id } = request.body
    try {
        const category = await Category.findOne({
            where: {
                id: category_id
            }
        })

        const product = await Product.create({
            name: name,
            price: price,
            stock: stock,
            categoryId: category_id
        })
        return res.json(product)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.errors)
    }
}

exports.productUpdate = async (req, res) => {
    const id = req.params.uuid
    const { name, price, stock, category_id } = req.body
    try {
        const category = await Category.findOne({
            where: {
                id: category_id
            }
        })

        const product = await Product.update({
            name: name,
            price: price,
            stock: stock,
            categoryId: category_id
        }, {
            where: {
                id: id
            }
        })
        return res.json(product)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.errors)
    }
}

exports.productSoftDelete = async (req, res) => {
    const id = req.params.uuid
    try {
        const product = await Product.destroy({
            where: {
                id: id
            }
        })
        return res.json(product)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.errors)
    }
}

exports.productHardDelete = async (req, res) => {
    const id = req.params.uuid
    try {
        const product = await Product.destroy({
            where: {
                id: id
            },
            force: true
        })
        return res.json(product)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.errors)
    }
}
