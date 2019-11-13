import React, { useState } from "react";
import api from "../../services/api";

export default function Register({ history }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await api.post("/register", { name, email, password });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">NOME</label>
                <input
                    type="text"
                    id="nome"
                    placeholder="Nome"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
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
                <button className="btn" type="submit">Cadastrar</button>
            </form>
        </>
    )
}