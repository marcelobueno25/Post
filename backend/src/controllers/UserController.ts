import * as bcrypt from "bcryptjs";
import { Request, Response } from "express";
import User from "../schemas/User";

const salt = 5;
class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await User.find();
    return res.json(users);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });

    if (name && email && password) {
      if (user) {
        return res.json({ message: false, error: "Usuario já cadastrado" });
      } else {
        await bcrypt.hash(req.body.password, salt, function (_, hash) {
          User.create({
            name,
            email,
            password: hash
          }).then(
            function () {
              return res.json({ message: true })
            },
            function () {
              return res.json({ message: false, error: "Erro ao cadastrar Usuario" });
            }
          );
        });
      }
    } else {
      return res.json({ message: false, error: "Preencha todos os campos" });
    }
  }

  public async store(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    const user = await User.findOne({
      email
    })
      .then(function (user: any) {
        if (!user) {
          return res.json({ message: false, error: "Usuário não cadastrado" });
        } else {
          bcrypt.compare(password, user.password, function (_, result) {
            if (result === true) {
              return res.json({ message: true })
            } else {
              return res.json({ message: false, error: "Senha incorreta" });
            }
          });
        }
      })
      .catch(function (error: any) {
        return res.json(error);
      });
    // return res.json(user);
  }
}

export default new UserController();
