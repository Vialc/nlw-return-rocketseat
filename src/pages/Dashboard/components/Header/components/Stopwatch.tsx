import { Listbox, Transition } from "@headlessui/react";
import { FormEvent, Fragment, useRef, useState } from "react";
import { Loading } from "../../../../../components/Loading";
import { api } from "../../../../../lib/api";
import { StartButtonActions } from "./StartButton";

export interface HandleRefreshCounts {
  refreshCountsMove: boolean;
}


export function Stopwatch({ closeModal, matter_id, student_id }: StartButtonActions, {refreshCountsMove}: HandleRefreshCounts) {
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isSendingCount, setIsSendingCount] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [noTimerMessage, setNoTimerMessage] = useState(false);
  const [refreshCounts, setRefreshCounts] = useState(false)
  const increment = useRef(0)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    setSuccessMessage(false)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(increment.current)
    setIsPaused(false)
  }

  const handleResume = () => {
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${parseInt(minutes) % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }


  async function HandleSubmitCount(e: FormEvent) {
    e.preventDefault()

    if (timer > 1){
      setNoTimerMessage(false)
      setSuccessMessage(false)
      setIsSendingCount(true)

    await api.post('/time_counts', {
      "time_count": timer * 1000,
	    "matter_id": matter_id,
	    "student_id": student_id
    })

    handleReset()
    setSuccessMessage(true)
    setIsSendingCount(false)
    setRefreshCounts(false)
    } else {
      setNoTimerMessage(true)
    }
    
  }

  return (
    <div className="app">
      <h3 className="text-sm mb-3 text-orange-700 font-bold">Selecione a matéria e clique em start para iniciar o cronômetro. </h3>
      <div className='rounded mb-4 flex flex-wrap bg-slate-400 transition-colors dark:bg-slate-800 shadow-md shadow-slate-800 dark:shadow-brand-500'>
        <p className="w-full text-center py-4 font-semibold text-lg">{formatTime()}</p>
        <div className="mb-5 w-full text-center">
          {
            !isActive && !isPaused ?
              <button onClick={handleStart} className=" bg-green-500 px-4 mr-3 hover:border-green-900 hover:ring-2 hover:ring-lime-900 transition-transform rounded ">Start</button>
              : (
                isPaused ? <button className="bg-yellow-500 px-4 mr-3 rounded hover:ring-2 hover:ring-yellow-600 " onClick={handlePause}>Pause</button> :
                  <button className="bg-green-500 px-4 mr-3 rounded hover:ring-2 hover:ring-lime-900" onClick={handleResume}>Continuar</button>
              )
          }
          <button className="bg-red-500 px-4 mr-3 rounded hover:ring-2 hover:ring-red-900" onClick={handleReset} disabled={!isActive}>Reset</button>

        </div>
      </div>
      <form onSubmit={HandleSubmitCount}>
        <input
          className="w-full mb-4 text-black"
          type="text"
          value={timer.toFixed(3)}
          hidden
        />
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-400 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          {isSendingCount ? <Loading /> : "Registrar Tempo"}
        </button>
        <button
          type="button"
          className=" ml-4 inline-flex justify-center rounded-md border border-transparent bg-orange-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-orange-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={() => closeModal()}
        >
          Cancelar
        </button>
      </form>
      {successMessage ? <p className="text-xs text-green-600 mt-4 -mb-4">Tempo Registrado com sucesso!</p> : <></>}
      {noTimerMessage ? <p className="text-xs text-red-600 mt-4 -mb-4">Você ainda não iniciou a contagem!</p> : <></>}
    </div>
  );

};