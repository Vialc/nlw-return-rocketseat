import { SignOut } from "phosphor-react";
import { ToggleMenuStateProps } from "..";

export function ExitButton({toggleMenu}: ToggleMenuStateProps) {
  return (
    <div className="flex">
      <SignOut className={toggleMenu ? "mb-4 ml-3" : "my-4"} size={26} />
      {toggleMenu ? <span className="mb-4 ml-1">Sair</span> : <></>}
    </div>
  );
}
