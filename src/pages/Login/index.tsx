import { FormEvent, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/Auth/AuthContext";

import Logo from '../../assets/logo.svg'
import Banner from '../../assets/login_banner.svg'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = useContext(AuthContext);
  const navigate = useNavigate()

  async function handleSubmitLogin(e: FormEvent) {
    e.preventDefault();

    const isLogged = await auth.login(email, password);
    if (isLogged) {
      navigate("/")
    } else {
      alert('Usuário ou senha inválidos')
    }
  }
  return (
    <div className="bg-slate-300 h-screen ">
      <div className="flex w-[90vw] h-[90vh]">
        <div className="w-1/2 hidden flex-wrap h-full sm:flex">
          <img src={Banner} alt="" />
          <div className="w-full -mt-6 text-center">
            <h1 className="text-slate-900 font-bold text-3xl">Contador de Estudos Online</h1>
            <p className="text-slate-900 font-bold text-xl">Gerencie seus estudos facilmente</p>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center sm:w-1/2 h-full">
          <div className="flex justify-center w-full">
          <img className=" mt-4 w-36" src={Logo} alt="" />
          </div>
          
          <form className="flex mt-[10vh] flex-col max-w-[80%]" onSubmit={handleSubmitLogin}>
            <h1 className="text-slate-900 font-bold w-full text-3xl">Fazer Login</h1>
            <p className="text-slate-900 font-bold w-full text-xl mb-[5vh]">Preencha seus dados para entrar</p>
            <input className="rounded-2xl mb-6 text-black" type="email" required onChange={e => setEmail(e.target.value)} placeholder="E-mail" />
            <input className="rounded-2xl mb-6 text-black" type="password" required onChange={e => setPassword(e.target.value)} placeholder="Senha" />
            <button className="rounded-2xl mb-6 bg-brand-500 p-2 text-lg w-1/2 self-center text-black" type="submit">Entrar</button>
          </form>
          <div className="pl-4 w-full">
            <h3 className="flex flex-wrap text-black w-full">Ainda não tem uma conta? </h3>
            <a className="w-auto font-semibold text-purple-900" href="/cadastrar">Cadastrar agora</a>
          </div>
        </div>
      </div>
    </div>
  )
}