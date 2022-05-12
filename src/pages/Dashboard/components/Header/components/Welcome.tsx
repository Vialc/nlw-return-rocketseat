import { StartButton } from "./StartButton";

interface WelcomeProps {
  student_id: string;
  first_name: string;
  matters: [];
}

export function Welcome({ first_name, matters, student_id }: WelcomeProps) {
  return (
    <div className="w-2/3">
      <p>Hi {first_name}</p>
      <h1 className="w-full text-2xl">Clique em Start</h1>
      <h1 className="w-full mb-6 text-2xl">e comece a amprender um novo conteúdo!</h1>
      <StartButton matters={matters} student_id={student_id} />
    </div>
  );
}
