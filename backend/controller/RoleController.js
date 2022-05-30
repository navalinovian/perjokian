const { Role } = require("../models");


exports.roleIndex = async (req, res) => {
    try {
        const roles = await Role.findAll();
        return res.json(roles)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}


exports.roleAll = async (req, res) => {
    try {
        const roles = await Role.findAll({ paranoid: false })
        return res.json(roles)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

exports.roleShow = async (req, res) => {
    const id = req.params.id
    try {
        const role = await Role.findOne({
            where: {
                id: id
            },
        })

        return res.json(role)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

exports.roleCreate = async (request, res) => {
    const { name, id } = request.body
    try {
        const role = await Role.create({
            id:id,
            name: name,
        })
        return res.json(role)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

exports.roleUpdate = async (req, res) => {
    const id = req.params.id
    const { name } = req.body
    try {
        const role = await Role.update({
            name: name
        }, {
            where: {
                id: id
            }
        })
        return res.json(role)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

exports.roleSoftDelete = async (req, res) => {
    const id = req.params.id
    try {
        const role = await Role.destroy({
            where: {
                id: id
            }
        })
        return res.json(role)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

exports.roleHardDelete = async (req, res) => {
    const id = req.params.id
    try {
        const role = await Role.destroy({
            where: {
                id: id
            },
            force: true
        })
        return res.json(role)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}
