import { use, useEffect, useState } from "react"
import { MdDoneOutline, MdDelete } from "react-icons/md";


export const TodoApp = () => {
    const [todoText, setTodoText] = useState('');
    const [todoArr, setTodoArr] = useState([]);
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            let date = new Date;
            setDateTime(`${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);



    const handleSubmit = (e) => {
        e.preventDefault();

    };


    const handleTodoText = (e) => {
        setTodoText(e.target.value);
    }

    const handleButtonClick = () => {
        if (todoText === '') return;
        if (todoArr.includes(todoText)) {
            setTodoText('');
            return;
        }
        setTodoArr((prevArr) => [...prevArr, todoText]);
        setTodoText('');
        //console.log will use stale state as updating is still scheduling
    }

    return (
        <div className="border-1 border-amber-300 p-12 rounded-3xl">
            <section className="my-3">
                <div>
                    <h1>TODO APP</h1>
                    <h2>{dateTime}</h2>
                </div>
            </section>
            <section>
                <form onSubmit={handleSubmit}>
                    <input
                        value={todoText}
                        onChange={handleTodoText}
                        type="text"
                        placeholder=""
                        className="w-60 mr-2 border-2 border-amber-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"

                    />
                    <button className="cursor-pointer" onClick={handleButtonClick}>Add</button>
                </form>
            </section>

            <section className="mt-3">
                {todoArr.map((ele, index) => <div className="flex" key={index}><span className="mr-6 w-50">{ele}</span> <MdDoneOutline className="mt-1 ml-4" />
                    <MdDelete className="mt-1 ml-4" />
                </div>)}
            </section>

        </div>
    )
}