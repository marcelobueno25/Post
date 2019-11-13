// import React, { useState } from "react";
// import api from "../../services/api";

// export default function Register({ history }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   async function handleSubmit(event) {
//     event.preventDefault();
//     await api.post("/register", { name, email, password });
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nome">NOME</label>
//         <input
//           type="text"
//           id="nome"
//           placeholder="Nome"
//           value={name}
//           onChange={event => setName(event.target.value)}
//         />
//         <label htmlFor="email">E-MAIL</label>
//         <input
//           type="email"
//           id="email"
//           placeholder="E-mail"
//           value={email}
//           onChange={event => setEmail(event.target.value)}
//         />
//         <label htmlFor="password">SENHA</label>
//         <input
//           type="password"
//           id="password"
//           placeholder="Senha"
//           value={password}
//           onChange={event => setPassword(event.target.value)}
//         />
//         <button className="btn" type="submit">
//           Cadastrar
//         </button>
//       </form>
//     </>
//   );
// }


import React from "react";
import api from "../../services/api";
import './scss/style.scss';

class Registrar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      texto: ""
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await api.post('/register', {
      email: this.state.email,
      password: this.state.password
    })
    console.log(response);
    if (response.data.user) {
      const {
        _id
      } = response.data.user;
      const {
        history
      } = this.props;
      history.push(`/${_id}`);
    } else {
      this.setState({
        texto: response.data.error
      });
    }
  }


  render() {
    return ( 
    <>
    <div className = "cardLogin">
      <div className = "cardLogin__item" >
        <div className = "cardLogin__img" > </div>
        <div>
          <div className = "cardLogin__title" > Criar conta </div>

          <form className = "formLogin" onSubmit = {this.handleSubmit}>
            <input type = "text" id = "name" placeholder = "Nome completo" />
            <input type = "email" id = "email" placeholder = "E-mail" onChange = {event => this.setState({email: event.target.value})}/> 
            <input type = "password" id = "password" placeholder = "Senha" autoComplete = "password" value = {this.state.password} onChange = {event => this.setState({password: event.target.value})}/> 

            <button className = "btn-1" type = "submit"> Cadastrar com facebook </button>  

            <button className = "btn" type = "submit"> Cadastrar </button>  

            <label> {this.state.texto} </label>   
            <div className = "alignAcc">
              <a href = "/login" className = "createAcc"> Já tenho cadastro </a> 
            </div> 
          </form> 
        </div> 
      </div> 
    </div> 
    </>    
    )
  }
}

export default Registrar;
