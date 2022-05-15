import { StartButton } from "./StartButton";

interface WelcomeProps {
  student_id: string;
  first_name: string;
  matters: [];
}

export function Welcome({ first_name, matters, student_id }: WelcomeProps) {
  return (
    <div className="w-full md:w-2/3">
      <p>Hi {first_name}</p>
      <h1 className="w-full md:text-base lg:text-xl">Clique em Começar os Estudos</h1>
      <h1 className="w-full md:text-base md:mb-3 lg:mb-4 lg:text-xl">e comece a amprender um novo conteúdo!</h1>
      <StartButton matters={matters} student_id={student_id} />
    </div> 
  );
}
