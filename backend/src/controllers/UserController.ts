import * as bcrypt from "bcryptjs";
import { Request, Response } from "express";
import User from "../schemas/User";

const salt = 5;
class UserController {
  // Listar
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await User.find();
    return res.json(users);
  }
  // Cadastrar
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user)
      return res.send({ error: 'Email já cadastrado' });
    await bcrypt.hash(req.body.password, salt, function (_, hash) {
      User.create({
        name,
        email,
        password: hash
      }).then(
        function (user: any) {
          return res.send({ user });
        }
      ).catch(() => {
        return res.send({ error: "Problema para cadastrar Usuario" });
      });
    });
  }
  // Login
  public async store(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const user = await User.findOne({
      email
    }).select('+password');
    if (!user)
      return res.send({ error: 'Email não encontrado' });
    if (!await bcrypt.compare(password, user.password))
      return res.send({ error: 'Senha Invalida' });
    res.send({ user });
  }
}

export default new UserController();
