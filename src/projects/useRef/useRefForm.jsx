import { useRef } from "react";

export const UseRefForm = () => {

    const usernameRef = useRef('');
    const handleInputSubmit = (e) => {
        e.preventDefault();
        console.log(usernameRef.current.value);
    }


    return (
        <>
            <form onSubmit={handleInputSubmit}>

                <input ref={usernameRef} name="username" placeholder="enter username.." className="border-amber-400 p-4 border-2" />

            </form>
            <button className="bg-amber-400 p-4 border-2 mt-2" onClick={handleInputSubmit}>Submit</button>

        </>
    )
}