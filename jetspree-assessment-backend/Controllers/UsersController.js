const db = require("../models");
const UsersModel = db.users;

const UsersController = {
    async listUsers(req, res) {
        if (req.params.id) {
            let user = await UsersModel.findByPk(req.params.id).then(data => data);
            res.send(user.dataValues);
        } else {
            let users = await UsersModel.findAll({
                raw: true,
            }).then(data => data);
            res.send(users);
        }
    },
    async createNewUser(req, res) {
        const user = await UsersModel.create(req.body);
        res.send({message: 'User ID ' + user.id + ' Successfully Created'});
    },
    updateUser(req, res) {
        UsersModel.findByPk(req.params.id)
            .then(function (obj) {
                // update
                if (obj)
                    return obj.update(req.body);
                // insert
                return UsersModel.create(req.body);
            }).then(function () {
            res.send({message: 'User Successfully Updates'});
        });
    },
    async deleteUser(req, res) {
        const user = await UsersModel.findByPk(req.params.id);
        await user.destroy();
        res.send({message: 'User ID ' + user.id + ' Successfully Deleted'});
    }
};

module.exports = UsersController;