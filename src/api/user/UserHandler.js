const User = require("./UserModel")

const getUsers = async (req, res) => {
    try {
        // const data = await User.findAll({ raw: true });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

const postUsers = async (req, res) => {
    try {
        const user = req.body
        console.log("user is", req.app)
        res.status(200).json(user)
        // const data = await User.create(user)
    }
    catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

module.exports = {
    getUsers,
    postUsers
}