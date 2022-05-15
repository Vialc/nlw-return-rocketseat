import { useEffect, useState } from "react";
import { IUser } from "../../@types/@types.Auth";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const apiReq = useApi();

  useEffect(()=> {
    const validateToken = async() => {
      const storageData = localStorage.getItem('authToken')
      if(storageData){
        const data= await apiReq.validateToken(storageData);
        if(data.length > 0) {
          setUser({ student_id: data[0].student_id, email: '', password: '' })
        }
      }
    }
    validateToken();
  }, [])

  async function login(email: string, password: string) {
    const data = await apiReq.Signin(email, password);
    if (data.length > 0) {
      console.log(data.length)
      setUser({ student_id: data[0].studentId, email, password: '' });
      setToken(data[0].studentId)
      console.log(user)
      return true;
    }
    return false;
  }

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token)
  }

  async function logout() {
    await apiReq.signout();
    setUser(null);
    setToken('');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}