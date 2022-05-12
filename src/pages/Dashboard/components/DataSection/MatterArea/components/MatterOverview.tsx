import { useEffect, useState } from "react";
import { api } from "../../../../../../lib/api";


interface MatterOverviewProps {
  student_id: string;
  matter_id:number;
  matter: string;
}

export function MatterOverview({student_id, matter_id, matter }: MatterOverviewProps) {

  const [userMatters, setUserMatters] = useState({
    _sum: {time_count: 0}
  })
  
     useEffect(() => {
        api.get(`/students/${student_id}/${matter_id}`).then((res) => {
        setUserMatters((prevState) => ({
          ...prevState,
          _sum: {time_count: res.data._sum.time_count}
        }));
    });
    }, [] )
  const timeCounted = userMatters._sum.time_count
    function padTo2Digits(timeCounted: number) {
      return timeCounted.toString().padStart(2, '0');
    }
    
    function convertMsToHM(milliseconds: number) {
      let seconds = Math.floor(milliseconds / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
    
      seconds = seconds % 60;
      minutes = seconds >= 30 ? minutes + 1 : minutes;
      minutes = minutes % 60;
  
      hours = hours % 24;
    
      return `${padTo2Digits(hours)}h:${padTo2Digits(minutes)}m`;
    }


  return (
    <>
      <div className="relative w-[48%] h-[45%] rounded transition-all bg-slate-500">
        <div className="w-[30%] h-[30%] text-center align-middle rounded bg-emerald-800 mt-2 ml-2">
          <span className="text-5xl ">{matter[0]}</span>
        </div>
        <h3 className="pl-2 text-2xl">
          {matter}
        </h3>
        <div className="absolute flex flex-col bottom-0">
        <h4 className="pl-2 text-lg">
          tempo de estudo total:
        </h4>
        <div className="text-center">
          <p>{convertMsToHM(userMatters._sum.time_count)}</p>
        </div>
        </div>
      </div>
    </>
  )
}