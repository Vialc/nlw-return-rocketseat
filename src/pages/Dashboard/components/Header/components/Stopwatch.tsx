import { Listbox, Transition } from "@headlessui/react";
import { FormEvent, Fragment, useRef, useState } from "react";
import { api } from "../../../../../lib/api";
import { StartButtonActions } from "./StartButton";

interface StopwatchProps {
  student_id: string;
  matters: [];
}

export function Stopwatch({ closeModal }: StartButtonActions, { matters, student_id }: StopwatchProps) {
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isSendingCount, setIsSendingCount] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const increment = useRef(0)
  const [selected, setSelected] = useState([])

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
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

    const toMili = Number(getHours) * 36600000 + Number(getMinutes) * 60000 + Number(getSeconds) * 1000;
    console.log(toMili) 

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  async function HandleSubmitCount(e: FormEvent) {
    e.preventDefault()
    setSuccessMessage(false)
    setIsSendingCount(true)

    await api.post('/time_counts', {
      "time_count": timer * 1000,
	    "matter_student": matters,
	    "student_id": student_id
    })
  }

  return (
    <div className="app">
      <h3>React Stopwatch </h3>
      <div className='stopwatch-card'>
        <p>{formatTime()}</p>
        <div className='buttons'>
          {
            !isActive && !isPaused ?
              <button onClick={handleStart}>Start</button>
              : (
                isPaused ? <button onClick={handlePause}>Pause</button> :
                  <button onClick={handleResume}>Resume</button>
              )
          }
          <button onClick={handleReset} disabled={!isActive}>Reset</button>

        </div>
      </div>
      <form onSubmit={HandleSubmitCount}>
        <input
          className="w-full mb-4 text-black"
          type="text"
          value={timer.toFixed(3)}
          hidden
          placeholder="preencha o nome da Matéria"
        />
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          {"Cadastrar Matéria"}
        </button>
        <button
          type="button"
          className=" ml-4 inline-flex justify-center rounded-md border border-transparent bg-orange-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-orange-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={() => closeModal()}
        >
          Cancelar
        </button>
      </form>
    </div>
  );

};