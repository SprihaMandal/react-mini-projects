import { useRef, useState } from "react"

export const MyTimer = () => {
    const [time, setTime] = useState(0);
    const renderTime = useRef(null);




    const startTime = () => {
        if (renderTime.current !== null) return;
        else renderTime.current = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);

    };

    const handleStop = () => {
        clearInterval(renderTime.current);
        timerRef.current = null;
    };


    return (
        <>
            <div className="p-10 flex justify-center text-center border-2 border-amber-500">
                <p>{time}</p>
            </div>

            <button onClick={startTime} className="mx-2 my-3 p-3 border-1 border-amber-600 rounded-3xl cursor-pointer">Start</button>
            <button onClick={handleStop} className="mx-2 my-3 p-3 border-1 border-amber-600 rounded-3xl cursor-pointer">Stop</button>
        </>

    )
}