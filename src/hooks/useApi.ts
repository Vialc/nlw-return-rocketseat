import { api } from "../lib/api";


export const useApi = () => ({
  
    validateToken: async (token: string) => {
      const response = await api.get(`/students/${token}`)
      console.log(response.data)
      return response.data
      
    },
    Signin: async (email: string, password: string) => {
     const response = await api.get(`/users/${email}/${password}`)
    
      return response.data

    },
    signout: async () => {

    }
  
})