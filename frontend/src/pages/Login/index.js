import React from "react";
import api from "../../services/api";
import './scss/style.scss';
import leftBg from '../../assets/k1.png';
import rightBg from '../../assets/k2.png';

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
        <div className="bImage">
          <div className="contLogin">
            <img className="left" src={leftBg}/>
            <form className= "formLogin" onSubmit = {this.handleSubmit}>
              <div className="typewriter">
                <h1>LOGIN</h1>
              </div>
              <input type = "email" id = "email" placeholder = "E-mail"  onChange = {event => this.setState({email: event.target.value})} />
              <input type="password" id="password" placeholder="Senha" autoComplete="password" value={this.state.password} onChange={event => this.setState({password: event.target.value})} />
              <div className="savePassword">
                <input type="checkbox" id = "checkbox" />
                <p className="remember"> Lembrar minha senha </p> 
              </div>
              <button className="btn" type="submit"> Entrar </button> 
              <label> {this.state.texto} </label> 
            </form>
            <img className="right" src={rightBg} />
          </div>  
        </div>
      </>
    )
  }
}

export default Login;