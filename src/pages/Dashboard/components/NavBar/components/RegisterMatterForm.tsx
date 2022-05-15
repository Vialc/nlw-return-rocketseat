import { FormEvent, useState } from "react";
import { Loading } from "../../../../../components/Loading";
import { api } from "../../../../../lib/api";
import { RegisterMatterProps } from "./RegisterMatter";


export function RegisterMatterForm({ closeModal, student_id }: RegisterMatterProps) {
  const [matterInput, setMatterInput] = useState('');
  const [isSendingMatter, setIsSendingMatter] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState(false)

  async function handleSubmitRegisterMatter(event: FormEvent) {
    event.preventDefault();

    if (matterInput.length > 1) {
      setSuccessMessage(false)
      setIsSendingMatter(true)
      setMatterInput('')

      await api.post('/matters', {
        "matter": matterInput,
        "matter_student": {
          "connect": {
            "student_id": student_id,
          }
        }
      })

      setIsSendingMatter(false)
      setSuccessMessage(true)
    } else {
      setInvalidMessage(true)
    }

  }


  return (
    <>
      <div className="mt-2">
        <form onSubmit={handleSubmitRegisterMatter}>
          <input
            className="w-full mb-4 text-black"
            type="text"
            value={matterInput}
            onChange={event => setMatterInput(event.target.value)}
            placeholder="preencha o nome da Matéria" />
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-400 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            {isSendingMatter ? <Loading /> : 'Cadastrar Matéria'}
          </button>
          <button
            type="button"
            className=" ml-4 inline-flex justify-center rounded-md border border-transparent bg-orange-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-orange-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={() => closeModal()}
          >
            Cancelar
          </button>
        </form>
        {successMessage ? <p className="text-xs text-green-600 mt-4 -mb-4">Matéria cadastrada com sucesso!</p> : <></>}
        {invalidMessage ? <p className="text-xs text-red-600 mt-4 -mb-4">Preencha o nome da matéria</p> : <></>}
      </div>
    </>
  );
}