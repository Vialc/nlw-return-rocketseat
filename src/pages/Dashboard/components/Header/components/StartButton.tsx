import { Dialog, Transition } from "@headlessui/react";
import { X } from "phosphor-react";
import { FormEvent, Fragment, useState } from "react";
import { MatterList } from "../../../../../components/MatterList";
import { Stopwatch } from "./Stopwatch";

export interface StartButtonActions {
  closeModal:  () => void;
  matter_id: number;
  student_id: string;
}

interface StartButtonProps {
  student_id: string;
  matters: [];
}

export function StartButton({ matters, student_id}: StartButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [matterId, setMatterId] = useState(0);

  function closeModal() {
    setIsOpen(false);
    window.location.reload()
  }

  function openModal() {
    setIsOpen(true);
  }

  function MatterIdSelected( currentMatterId: number) {
    setMatterId(currentMatterId)
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-brand-500  px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Começar os Estudos
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
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
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-slate-50"
                  >
                    Qual matéria você quer estudar?
                    <button
                      type="button"
                      className="absolute top-2 right-5 hover:cursor-pointer"
                      onClick={closeModal}
                    >
                      <X className="dark:text-white" weight="bold"/>
                    </button>
                    <MatterList MatterIdSelected={MatterIdSelected} matters={matters}/>
                  </Dialog.Title>
                  
                  <Stopwatch matter_id={matterId} student_id={student_id} closeModal={closeModal} />
                  <div className="mt-4">
              
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
