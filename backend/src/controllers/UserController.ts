import * as bcrypt from "bcryptjs";
import { Request, Response } from "express";
import User from "../schemas/User";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await User.find();
    return res.json(users);
  }

  async store(req: Request, res: Response) {
    const { email, password } = req.body;
    await User.findOne({
      email
    })
      .then(function(user: any) {
        if (!user) {
          return res.send("Usuário não cadastrado");
        } else {
          bcrypt.compare(password, user.password, function(_, result) {
            if (result == true) {
              return res.redirect("/login/id");
            } else {
              return res.send("Senha incorreta");
            }
          });
        }
      })
      .catch(function(error: any) {
        console.log(error);
      });
  }
}

export default new UserController();
