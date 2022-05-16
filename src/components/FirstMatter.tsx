import { Dialog, Transition } from '@headlessui/react'
import { X } from 'phosphor-react'
import { Fragment, useState } from 'react'
import { RegisterMatterProps } from '../pages/Dashboard/components/NavBar/components/RegisterMatter'
import { RegisterMatterForm } from '../pages/Dashboard/components/NavBar/components/RegisterMatterForm'

export function FirstMatter({ student_id }: RegisterMatterProps) {
  const [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
    window.location.reload()
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden shadow-lg shadow-slate-800 dark:shadow-purple-900 rounded-2xl bg-slate-200 dark:bg-slate-900 p-6 text-left align-middle transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium dark:text-slate-300 leading-6 text-gray-900"
                  >
                    Primeiro, cadastre uma matéria, depois clique em começar novamente
                  </Dialog.Title>
                  <div className="mt-2">
                    <RegisterMatterForm closeModal={closeModal} student_id={student_id} />
                  </div>
                  <button type="button" className="absolute font-extrabold top-3 right-5 hover:cursor-pointer" onClick={closeModal}>
                    <X  />
                    </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
