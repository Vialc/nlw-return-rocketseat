import { GraphicArea } from "./GraphicArea";
import { MatterArea } from "./MatterArea";

interface DataSectionProps {
  matters: [] ;
  student_id: string;
}

export function DataSection({ matters, student_id }: DataSectionProps) {
  return (
    <>
      <div className="absolute flex bottom-0 md:w-10/12 lg:w-2/3 ml-20 mr-1 mb-4 h-2/3 bg-transparent">
        <GraphicArea  />
        <MatterArea matters={matters} student_id={student_id} />
      </div>
    </>
  );
}
