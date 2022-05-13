import { Circle } from "phosphor-react";
import { useState } from "react";
import { MatterOverview } from "./components/MatterOverview";

interface MatterAreaProps {
  matters: [];
  student_id: string;
}

export function MatterArea({ matters, student_id }: MatterAreaProps) {
  const [matterRangeInitial, setMatterRangeInitial] = useState(0);
  const [matterRangeFinal, setMatterRangeFinal] = useState(4);

  function handlePageOne() {
    setMatterRangeInitial(0);
    setMatterRangeFinal(4);
  }

  function handlePageTwo() {
    setMatterRangeInitial(4);
    setMatterRangeFinal(8);
  }

  function handlePageTree() {
    setMatterRangeInitial(8);
    setMatterRangeFinal(12);
  }

  return (
    <>
      <div className="flex gap-x-2 flex-wrap columns-2 px-2 pt-6 fl h-full w-1/2 rounded-lg bg-transparent">
        {matters.slice(matterRangeInitial, matterRangeFinal).map((item) => {
          const { matter, matter_id } = item;

          return (
            <MatterOverview
              key={matter_id}
              matter={matter}
              matter_id={matter_id}
              student_id={student_id}
            />
          );
        })}

        <div className=" w-full max-h-6 bg-transparent bottom-0 flex justify-center ">
          {matters.slice(4, 8).length > 0 ? (
            <>
              <button onClick={handlePageOne}>
                <Circle size={12} weight="fill" className="" />
              </button>
              <button onClick={handlePageTwo}>
                <Circle size={12} weight="fill" className="" />
              </button>
              <button
                onClick={handlePageTree}
                className="disabled:opacity-30"
                disabled={matters.slice(8, 12).length <= 0}
              >
                <Circle size={12} weight="fill" className="" />
              </button>
            </>
          ) : (
            <>
              <button>
                {" "}
                <Circle size={12} weight="fill" className="opacity-30" />{" "}
              </button>
              <button>
                {" "}
                <Circle size={12} weight="fill" className="opacity-30" />{" "}
              </button>
              <button>
                {" "}
                <Circle size={12} weight="fill" className="opacity-30" />{" "}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
