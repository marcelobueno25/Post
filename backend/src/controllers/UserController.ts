import * as bcrypt from "bcryptjs";
import { Request, Response } from "express";
import User from "../models/User.model";

const salt = 5;
class UserController {
  // Listar
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find();
    return res.json(users);
  }

  // Cadastrar
  public async create (req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ error: "User already registered" });
    }

    await bcrypt.hash(req.body.password, salt, function (_, hash) {
      User.create({
        name,
        email,
        password: hash
      })
        .then(function (user: object) {
          return res.send({ user });
        })
        .catch(() => {
          return res.status(400).send({ error: "Error registering " });
        });
    });
  }

  // // Login
  public async store (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const user = await User.findOne({
      email
    }).select("+password");
    if (!user) { return res.send({ error: "Email not found" }); }
    if (!await bcrypt.compare(password, user.password)) { return res.send({ error: "Invalid password" }); }
    res.send({ user });
  }
}

export default new UserController();
