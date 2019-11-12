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
      <div className="cardLogin">
        <div className = "cardLogin__item">
          <div className = "cardLogin__img"></div>
          <div>
            <div className = "cardLogin__title"> LOGIN ON POST </div>
            
            <form className = "formLogin" onSubmit = {this.handleSubmit}>
              <input type = "email" id = "email" placeholder = "E-mail" onChange = {event => this.setState({email: event.target.value})} /> 

              <input type = "password" id = "password" placeholder = "Senha" autoComplete = "password" value = {this.state.password} onChange = {event => this.setState({password: event.target.value})}/> 

                <div className = "savePassword">
                  <input type = "checkbox" id = "checkbox" />
                  <label className = "remember" > Lembrar minha senha </label>  
                </div>
                <button className = "btn" type = "submit" > Entrar </button> 
                <label> {this.state.texto} </label>  
            </form>
          </div>
        </div>
      </div>
        
        {/* <div className="center">  
        <div className = "title">
          <h1> LOGIN ON <span>post</span> </h1> 
        </div> 
        <div className = "box">
            <form className = "formLogin" onSubmit = {this.handleSubmit}>
            <input type = "email" id = "email" placeholder = "E-mail" onChange = {event => this.setState({email: event.target.value})} /> 

            <input type = "password" id = "password" placeholder = "Senha" autoComplete = "password" value = {this.state.password} onChange = {event => this.setState({password: event.target.value})}/> 

            <div className = "savePassword">
              <input type = "checkbox" id = "checkbox" />
              <label className = "remember" > Lembrar minha senha </label>  
            </div>
              <button className = "btn" type = "submit" > Entrar </button> 
              <label> {this.state.texto} </label>  
          </form>
        </div>
      </div>     */}
      </>    
    )
  }
}

export default Login;

          {/* <div className="backG">
          <div className="container">
            <div className="row">
              <div className="col-md-12 main">
                <h1 className="mainTitle"> Bem vindo ao Post!</h1>
              </div>
            </div>  
          </div>  
        </div>  */}

{/* 
         <div class="navbar">
          <h1 className="PostLogo">Post</h1>
        </div>
        <div className="bImage">
          <div className="contLogin">
            <img className="left" src={leftBg} alt="left bracket"/>
            <form className= "formLogin" onSubmit = {this.handleSubmit}>
              <div className="typewriter">
                <h1>LOGIN</h1>
              </div>
              <input type = "email" id = "email" placeholder = "E-mail"  onChange = {event => this.setState({email: event.target.value})} />
              <input type="password" id="password" placeholder="Senha" autoComplete="password" value={this.state.password} onChange={event => this.setState({password: event.target.value})} />
              <div className="savePassword">
                <input type="checkbox" id = "checkbox" />
                <label className="remember"> Lembrar minha senha </label> 
              </div>
              <button className="btn" type="submit"> Entrar </button> 
              <label> {this.state.texto} </label> 
            </form>
            <img className="right" src={rightBg} alt="right bracket" />
          </div>  
        </div>  */} 
