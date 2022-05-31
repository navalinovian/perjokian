const { Role, User } = require("../models");


exports.userIndex = async (req, res) => {
    try {
        const users = await User.findAll({
            include:[Role]
        });
        return res.json(users)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}


exports.userAll = async (req, res) => {
    try {
        const users = await User.findAll({ paranoid: false })
        return res.json(users)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

exports.login = async (req, res) => {
    const {username, password} = req.body
    try {
        const user = await User.findOne({
            where: {
                username: username
            },
        })

        if (!user) {
            return res.status(404).json({message:"user not found"});
        } else if (!await user.validPassword(password)) {
            return res.status(404).json({message:"password is wrong"});
        } else {
            return res.status(200).json({message:"Accepted"})
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

exports.userShow = async (req, res) => {
    const id = req.params.uuid
    try {
        const user = await User.findOne({
            where: {
                id: id
            },
        })

        return res.json(user)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

exports.userCreate = async (request, res) => {
    const { username, password, roleId } = request.body
    try {
        const role = await Role.findOne({where:{id:roleId}});
        const user = await User.create({
            username: username,
            password:password,
            roleId:roleId
        })
        return res.json(user)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

exports.userUpdate = async (req, res) => {
    const id = req.params.uuid
    const { password } = req.body
    try {
        const role = await Role.findOne({where:{id:roleId}});
        const user = await User.update({
            password
        }, {
            where: {
                id: id
            }
        })
        return res.json(user)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

exports.userSoftDelete = async (req, res) => {
    const id = req.params.uuid
    try {
        const user = await User.destroy({
            where: {
                id: id
            }
        })
        return res.json(user)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

exports.userHardDelete = async (req, res) => {
    const id = req.params.uuid
    try {
        const user = await User.destroy({
            where: {
                id: id
            },
            force: true
        })
        return res.json(user)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}
