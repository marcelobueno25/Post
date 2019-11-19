import React from "react";
import api from "../../services/api";
import './scss/style.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      texto: ""
    }
  }

    handleSubmit  = async (event) => {
      event.preventDefault();
      const response = await api.post('/login', {
        email: this.state.email,
        password: this.state.password
      })
      console.log(response);
      if (response.data.user) {
        const { _id } = response.data.user;
        const {history} = this.props;
        history.push(`/${_id}`);
      } else {
        this.setState({texto: response.data.error});
      }
    }


  render () {
    return (
      <>
      <div id="login">
        <div className = "login_item">
          <div className = "login_img"></div>
          <div>
            <div className = "login_title"> LOGIN ON POST </div>
            
            <form className = "formLogin" onSubmit = {this.handleSubmit}>
              <input type = "email" id = "email" placeholder = "E-mail" onChange = {event => this.setState({email: event.target.value})} /> 

              <input type = "password" id = "password" placeholder = "Senha" autoComplete = "password" value = {this.state.password} onChange = {event => this.setState({password: event.target.value})}/> 

              <div className = "savePassword">
                <input type = "checkbox" id = "checkbox" />
                <label className = "remember" > Lembrar minha senha </label>  
              </div>
              <a href="/home" className = "btn" type = "submit" > Entrar </a> 
              <label> {this.state.texto} </label>  
              <div className="alignAcc">
                <a href="/register" className="createAcc">criar conta</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>    
    )
  }
}

export default Login;
