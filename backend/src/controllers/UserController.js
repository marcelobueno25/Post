const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;
    await User.findOne({
      email
    }).then(function (user) {
      if (!user) {
        return res.send("Usuário não cadastrado");
      } else {
        bcrypt.compare(password, user.password, function (err, result) {
          if (result == true) {
            return res.redirect('/login/id');
          } else {
            return res.send("Senha incorreta");
          }
        })
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
};
