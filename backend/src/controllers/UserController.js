const User = require("../models/User");

let userController = {};

module.exports = {
  async post(req, res) {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!email || !password) {
      return res.json({ message: `Preencha todos os campos` });
    }

    if (!user) {
      return res.json({ message: `Usuário não cadastrado` });
    }

    if (password !== user.password) {
      return res.json({ message: `Senha incorreta` });
    }

    return res.json(user);
  }
};
