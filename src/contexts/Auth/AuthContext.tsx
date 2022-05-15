import { createContext} from "react";

import { IUser } from "../../@types/@types.Auth";

export type AuthContextType = {
  user: IUser | null;
  login: (password: string, email: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);


