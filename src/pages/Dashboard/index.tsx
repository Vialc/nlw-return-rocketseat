import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { api } from "../../lib/api";
import { DataSection } from "./components/DataSection";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { ProfileSection } from "./components/ProfileSection";

interface DashboardProps {
  student_id: string;
}

export function Dashboard({ student_id }: DashboardProps) {
  const [user, setUser] = useState({
    first_name: '',
    student_id: '',
    goal: "",
    matters: [] =[],
  })

  useEffect(() => {
    api.get(`/students/${student_id}`).then((res) => {
      const { first_name, student_id, goal, matters} = res.data[0]
      setUser((prevState) => ({
      ...prevState,
      first_name,
      student_id,
      goal,
      matters
    }));
});
}, [] )


const matters = user.matters

  return (<div>
    <NavBar student_id={student_id} matters={matters} />
    {user.student_id ? (
      <>
    <Header student_id={user.student_id} matters={matters} first_name={user.first_name} />
    <DataSection matters={matters} student_id={user.student_id} />
    </>
    )
    :
    (
    <div className="absolute flex flex-col  items-center top-[50vh] left-[45vw]">
      <Loading />
      <p className="">Carregando seus dados</p>
    </div>
    )}
    <ProfileSection />
  </div>)
}