const { Category } = require("../models");


exports.categoryIndex = async (req, res) => {
    try {
        const categories = await Category.findAll()

        return res.json(categories)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}


exports.categoryAll =  async (req, res) => {
    try {
        const categories = await Category.findAll({ paranoid: false })
        return res.json(categories)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

exports.categoryShow = async (req, res) => {
    const id = req.params.id
    try {
        const categories = await Category.findOne({
            where: { id: id }
        })
        return res.json(categories)
    } catch (error) {
        console.log(error);
        return res.status(404).json({ error: 'Not Found!' })
    }
}

exports.categoryCreate = async (req, res) => {
    const { id, name } = req.body
    try {
        const category = await Category.create({
            id: id,
            name: name
        })
        return res.json(category)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

exports.categoryUpdate =  async (req, res) => {
    const id = req.params.id
    const { name } = req.body
    const now = Date.now()
    try {
        const category = await Category.update({
            name: name,
            updatedAt: now
        }, {
            where: {
                id: id
            },
        })
        return res.json(category)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

exports.categorySoftDelete =  async (req, res) => {
    const id = req.params.id
    try {
        const category = await Category.destroy({
            where: {
                id: id
            }
        })
        return res.json(category)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

exports.categoryHardDelete = async (req, res) => {
    const id = req.params.id
    try {
        const category = await Category.destroy({
            where: {
                id: id
            },
            force: true
        })
        return res.json(category)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}
