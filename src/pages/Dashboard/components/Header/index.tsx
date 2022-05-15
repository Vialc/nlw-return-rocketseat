import { HeaderImage } from "./components/HeaderImage";
import { Welcome } from "./components/Welcome";

interface HeaderProps {
  student_id: string;
  first_name: string;
  matters: [];
}

export function Header({ first_name, matters, student_id }:HeaderProps) {
  return (
    <>
      <div className="absolute flex md:w-10/12 lg:w-2/3 ml-20 mr-2 mt-4 pl-4 rounded h-1/4 bg-slate-400 transition-colors dark:bg-slate-800 shadow-md shadow-slate-800 dark:shadow-brand-500">
        <Welcome matters={matters} student_id={student_id} first_name={first_name} />
        <HeaderImage />
      </div>
    </>
  )
}