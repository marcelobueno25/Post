import React, { useState } from "react";

import api from "../../services/api";


export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/login", { email, password });
    const { id } = response.data;
    console.log(id);
    history.push("/login");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL</label>
        <input
          type="email"
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <label htmlFor="password">SENHA</label>
        <input
          type="password"
          id="password"
          placeholder="Senha"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  )
}