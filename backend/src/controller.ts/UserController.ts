import User from "../model/User"
import * as bcrypt from "bcryptjs";
export class UserController {
    async store(req: any, res: any) {
        const { email, password } = req.body;
        await User.findOne({
            email
        }).then(function (user: any) {
            if (!user) {
                return res.send("Usuário não cadastrado");
            } else {
                bcrypt.compare(password, user.password, function (_, result) {
                    if (result == true) {
                        return res.redirect('/login/id');
                    } else {
                        return res.send("Senha incorreta");
                    }
                })
            }
        }).catch(function (error: any) {
            console.log(error);
        });
    }
};
