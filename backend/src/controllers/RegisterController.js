const User = require("../models/User");

module.exports = {
    async store(req, res) {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });

        if (name && email && password) {
            if (user) {
                return res.json({ message: `Usuario já cadastrado` });
            } else {
                const register = await User.create({
                    name,
                    email,
                    password
                });
                return res.json(register);
            }
        } else {
            return res.json({ message: `Preencha todos os campos` });
        }
    }
};
