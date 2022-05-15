import { Popover, Switch, Transition } from "@headlessui/react";
import {
  List,
  Moon,
  Sun,
  X,
} from "phosphor-react";
import { useState } from "react";
import { ExitButton } from "./components/ExitButton";
import { HomeButton } from "./components/HomeButton";
import { RegisterMatter } from "./components/RegisterMatter";
import { Settings } from "./components/Settings";

export interface ToggleMenuStateProps {
  toggleMenu: boolean;
  matters: [];
  student_id: string;
}

interface NavBarProps {
  matters: [];
  student_id: string;
}

export function NavBar({ matters, student_id }:NavBarProps ) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [enabled, setEnabled] = useState(false);

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu);
  }
  function handleKeyToogleMenu({ key }: React.KeyboardEvent<HTMLButtonElement>) {
    if (key === 'Enter'){
      setToggleMenu(!toggleMenu);
    } else if (key === ' ') {
      setToggleMenu(!toggleMenu);
    }
  }

  function handleTheme() {

     if (!enabled) {
      setEnabled(true)  
      document.getElementById('html')?.classList.add('dark')
     }
     else {
      setEnabled(false)
      document.getElementById('html')?.classList.remove('dark')
     } 
       
    
  }
  return (
    <>
      <div
        className={`absolute h-28 md:h-screen ${
          toggleMenu ? "w-56" : "w-16"
        } z-10 transition-all duration-300 ml-4 py-4 px-2 bg-transparent`}
      >
        <Popover className="flex h-[50vh]  md:h-full shadow-md shadow-slate-800 dark:shadow-brand-500 bg-slate-400 transition-colors dark:bg-slate-800 py-4 rounded flex-col items-center">
          <div className="h-1/6">
            <Popover.Button
              onClick={handleToggleMenu}
              onKeyDown={handleKeyToogleMenu}
            >
              {toggleMenu ? (
                <X className="right-0 top-0 mr-1 mt-1" size={26} />
              ) : (
                <List size={32} />
              )}
            </Popover.Button>
          </div>
          <Transition
            className="h-4/6 flex flex-col w-full"
            show={toggleMenu}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <Popover.Panel className="h-4/6 flex flex-col w-full">
              <HomeButton student_id={student_id} matters={matters} toggleMenu={toggleMenu} />
              
              <RegisterMatter student_id={student_id} matters={matters} toggleMenu={toggleMenu} />
              
              <Settings student_id={student_id} matters={matters}  toggleMenu={toggleMenu} />
              <ExitButton student_id={student_id} matters={matters} toggleMenu={toggleMenu} />
            </Popover.Panel>
          </Transition>
          <Transition
            className={toggleMenu ? "hidden " : "h-4/6 flex flex-col "}
            show={!toggleMenu}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <HomeButton student_id={student_id} matters={matters} toggleMenu={toggleMenu} />
            <RegisterMatter student_id={student_id} matters={matters} toggleMenu={toggleMenu}/>
            <Settings student_id={student_id} matters={matters} toggleMenu={toggleMenu} />
            <ExitButton student_id={student_id} matters={matters} toggleMenu={toggleMenu} />
          </Transition>
          <div className="h-1/6 transition-transform duration-1000">
            <Switch
              checked={enabled}
              onChange={handleTheme}
              className={`${
                enabled ? "bg-blue-600" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <Moon className="absolute translate-x-1" />
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block z-10 h-4 w-4 transition-transform transform rounded-full bg-white`}
              />
              <Sun className="absolute translate-x-6 text-black" />
            </Switch>
          </div>
        </Popover>
      </div>
    </>
  );
}
