import { SignOut } from "phosphor-react";
import { useContext } from "react";
import { ToggleMenuStateProps } from "..";
import { AuthContext } from "../../../../../contexts/Auth/AuthContext";

export function ExitButton({toggleMenu}: ToggleMenuStateProps) {
  const auth = useContext(AuthContext)

  async function handleLogout() {
    await auth.logout()
  }
  return (
    <div className="flex hover:cursor-pointer" onClick={handleLogout}>
      <SignOut className={toggleMenu ? "mb-4 ml-3" : "my-4"} size={26} />
      {toggleMenu ? <span className="mb-4 ml-1">Sair</span> : <></>}
    </div>
  );
}
