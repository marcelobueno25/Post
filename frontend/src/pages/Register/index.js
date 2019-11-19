import React from "react";
import api from "../../services/api";
import './scss/style.scss';

class Registrar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
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

  validarSenha = () => {
    if (this.state.password != "" && this.state.confirmPassword != "" && this.state.password === this.state.confirmPassword) {
      this.props.history.push('/login')
    } else {
      alert('As senhas digitadas estão diferentes');
       this.refs.password.value = '';
       this.refs.password1.value = '';
    }
  }


  render() {
    return ( 
    <>
    <div id="register">
      <div className ="register_item" >
        <div className ="register_img" > </div>
        <div>
          <div className ="register_title" > Criar conta </div>

          <form className ="formRegister" onSubmit = {this.handleSubmit}>
            <input type ="text" id ="name" placeholder ="Nome completo" />
            <input type ="email" id ="email" placeholder ="E-mail" onChange = {event => this.setState({email: event.target.value})}/> 
            <input type ="password" id ="password" name="password" ref="password" placeholder ="Senha" size="10" maxLength="10" onChange = {event => this.setState({password: event.target.value})} />
            <input type ="password" id ="password1" name="password1" ref="password1" placeholder ="Repetir a senha"  size="10" maxLength="10" onChange = {event => this.setState({confirmPassword: event.target.value})} />  

            <button className ="btn-1" type ="submit"> Cadastrar com facebook </button>  
            <button className ="btn" type ="submit" onClick={ this.validarSenha }> Cadastrar </button>  

            <label> {this.state.texto} </label>   
            <div className ="alignAcc">
              <a href ="/login" className ="createAcc"> já tenho cadastro </a> 
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
