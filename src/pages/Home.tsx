import { useContext } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { Dashboard } from "./Dashboard";

export function Home() {
  const { user } = useContext(AuthContext)

  return <Dashboard student_id={user!.student_id}/>
        
    
  
}