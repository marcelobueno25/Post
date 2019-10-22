const User = require("../models/User");
const bcrypt = require("bcrypt");
const salt = 5;

module.exports = {
    async store(req, res) {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });

        if (name && email && password) {
            if (user) {
                return res.send("Usuario já cadastrado");
            } else {
                await bcrypt.hash(req.body.password, salt, function (err, hash) {
                    User.create({
                        name,
                        email,
                        password: hash
                    }).then(function (data) {
                        return res.redirect('/login');
                    }, function (data) {
                        return res.send("Erro ao cadastrar Usuario");
                    })
                })
            }
        } else {
            return res.send("Preencha todos os campos");
        }
    }
};
