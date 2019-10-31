import * as bcrypt from "bcryptjs";
import { Request, Response } from "express";
import User from "../schemas/User";

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find();
    return res.json(users);
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body);
    return res.json(user);
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const user = await User.findOne({
      email
    })
      .then(function (user: any) {
        if (!user) {
          return res.send("Usuário não cadastrado");
        } else {
          bcrypt.compare(password, user.password, function (_, result) {
            if (result === true) {
              return res.redirect("/login/id");
            } else {
              return res.send("Senha incorreta");
            }
          });
        }
      })
      .catch(function (error: any) {
        return res.json(error);
      });
    return res.json(user);
  }
}

export default new UserController();
