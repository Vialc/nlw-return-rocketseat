import { UserGear } from "phosphor-react";
import { ToggleMenuStateProps } from "..";

export function Settings({toggleMenu}: ToggleMenuStateProps) {
  return (
    <div className="flex w-full">
      <UserGear className={toggleMenu ? "mb-4 ml-3" : "my-4"} size={26} />
      {toggleMenu ? <span className="mb-4 ml-1">Configurações</span> : <></>}
    </div>
  );
}
