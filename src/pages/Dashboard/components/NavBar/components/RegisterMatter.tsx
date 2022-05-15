import { Books, X } from "phosphor-react";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ToggleMenuStateProps } from "..";
import { RegisterMatterForm } from "./RegisterMatterForm";

export interface RegisterMatterProps {
  closeModal:  () => void;
  student_id: string
}



export function RegisterMatter({toggleMenu, matters, student_id}: ToggleMenuStateProps) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
    window.location.reload()
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>
    <div className="flex hover:cursor-pointer" onClick={openModal}>

    <button
          disabled={matters!.slice(0, 12).length > 11}
          type="button"
          className=" dark:text-white text-black transition-colors duration-1000 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
      <Books className={toggleMenu ? "mb-4 ml-3" : "my-4"} size={26} />

      </button>
      {toggleMenu ? <span className="mb-4 ml-1">Cadastrar Matéria</span> : <></>}
    </div>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden shadow-slate-800 dark:shadow-purple-900 rounded-2xl bg-slate-200 dark:bg-slate-900 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="relative text-lg font-medium leading-6 text-gray-900 dark:text-slate-50"
                  >
                    Cadastrar Matéria
                    <button type="button" className="absolute top-0 right-0 hover:cursor-pointer" onClick={closeModal}>
                    <X  />
                    </button>
                  </Dialog.Title>
                  <RegisterMatterForm student_id={student_id}  closeModal={closeModal} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
