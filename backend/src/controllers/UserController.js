const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (email && password) {
      if (!user) {
        return res.json({ message: `Usuário não cadastrado` });
      } else if (password !== user.password) {
        return res.json({ message: `Senha incorreta` });
      }
    } else {
      return res.json({ message: `Preencha todos os campos` });
    }

    if (password == user.password) {
      return res.json({ message: `Entrou` });
    }

    return res.json(user);
  }
};
