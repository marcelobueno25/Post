/*  import User from "../models/User";
 import * as bcrypt from "bcryptjs";

 const salt = 5;
 class RegisterController {
   async store(req: any, res: any) {
     const { name, email, password } = req.body;
     let user = await User.findOne({ email });

     if (name && email && password) {
       if (user) {
         return res.send("Usuario já cadastrado");
       } else {
         await bcrypt.hash(req.body.password, salt, function(_, hash) {
           User.create({
             name,
             email,
             password: hash
           }).then(
             function() {
               return res.redirect("/login");
             },
             function() {
               return res.send("Erro ao cadastrar Usuario");
             }
           );
         });
       }
     } else {
       return res.send("Preencha todos os campos");
     }
   }
 }

 export default new RegisterController();
 */