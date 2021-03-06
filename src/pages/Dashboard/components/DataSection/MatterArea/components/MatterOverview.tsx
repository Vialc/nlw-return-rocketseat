import { useEffect, useState } from "react";
import { api } from "../../../../../../lib/api";
import { HandleRefreshCounts } from "../../../Header/components/Stopwatch";


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
      <div className="relative w-[48%] h-[45%] rounded transition-all bg-slate-400 dark:bg-slate-800 shadow-md shadow-slate-800 dark:shadow-brand-500">
        <div className="w-[30%] h-[30%] text-center align-middle rounded bg-teal-600 mt-2 ml-2">
          <span className="text-5xl ">{matter[0].toUpperCase()}</span>
        </div>
        <h3 className="pl-2 text-base md:text-2xl">
          {matter}
        </h3>
        <div className="absolute flex flex-col bottom-0">
        <h4 className="pl-2 text-xs md:text-sm lg:text-lg">
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