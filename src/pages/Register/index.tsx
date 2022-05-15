import { FormEvent, useState } from "react"
import { api } from "../../lib/api";

import Logo from '../../assets/logo.svg'
import Banner from '../../assets/login_banner.svg'

export function Register() {
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [birth_date, setBirth_date] = useState('');
  const [goal, setGoal] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user_type, setUser_type] = useState('student');
  const [studentId, setStudentId] = useState('');


  async function HandleSignup(e: FormEvent) {
    e.preventDefault()

    api.post('/users', {
      "first_name": first_name,
      "last_name": last_name,
      "birth_date": birth_date,
      "goal": goal,
      "user": {
        "create": {
          "email": email,
          "password": password,
          "user_type": user_type
        }
      }
    })

    console.log('success')
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
          <img className=" mt-4 w-36" src={Logo} alt="" />
          <form className="flex mt-[5vh] flex-wrap max-w-[80%]" action="submit">
          <h1 className="text-slate-900 font-bold w-full text-xl">Criar Conta</h1>
            <p className="text-slate-900 font-bold text-base mb-[2vh]">Preencha seus dados para entrar</p>
            <input className="rounded-2xl w-full mb-4 text-black" type="text" onChange={e => setFirst_name(e.target.value)} placeholder="Nome" />
            <input className="rounded-2xl w-full mb-6 text-black" type="text" onChange={e => setLast_name(e.target.value)} placeholder="Sobrenome" />
            <div>
            <label className="absolute text-xs text-black font-medium mt-10 lg:-mt-5 sm:text-sm">Data de Nascimento</label>
            <input className="rounded-2xl mb-6 mr-4 w-1/3 text-black" type="date" onChange={e => setBirth_date(e.target.value)} placeholder="Nascimento" />
            <label className="absolute text-xs text-black -mt-5 -ml-24 lg:ml-0 font-medium sm:text-sm">Para o que está estudando? Ex. Trabalho, vestibular</label>
            <input className="rounded-2xl mb-6 w-1/2 text-black" type="text" onChange={e => setGoal(e.target.value)} placeholder="Objetivo" />
            </div>
            <input className="rounded-2xl w-full mb-6 text-black" type="email" onChange={e => setEmail(e.target.value)} placeholder="E-mail" />
            <input className="rounded-2xl w-full mb-6 text-black" type="password" onChange={e => setPassword(e.target.value)} placeholder="Senha" />
            <button className="rounded-2xl mb-6 bg-brand-500 p-2 text-lg w-1/2 self-center text-black" onClick={HandleSignup} type="submit">Cadastrar</button>
          </form>
          <div>
            <h3 className="flex flex-wrap text-black w-full">Já possui uma conta? </h3>
            <a className="w-auto font-semibold text-purple-900" href="/login">Fazer Login</a>
          </div>
        </div>
      </div>
    </div>
  )
}