import { House } from "phosphor-react";
import { ToggleMenuStateProps } from "..";

export function HomeButton({toggleMenu}: ToggleMenuStateProps) {
  return (
    <div className="flex">
      <House className={toggleMenu ? "mb-4 ml-3" : "mb-4"} size={26} />
      {toggleMenu ? <span className="mb-4 ml-1">Home</span> : <></>}
    </div>
  );
}
