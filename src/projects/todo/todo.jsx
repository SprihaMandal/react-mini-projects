import { useState } from "react"

export const TodoApp = () => {
    const [todoText, setTodoText] = useState('');
    const handleTodoText = (e) => {
        console.log(e.target.value);
        setTodoText(e.target.value);
    }

    return (
        <>
            <section>
                <div>
                    <h1>TODO APP</h1>
                    <h2>date-time</h2>
                </div>
            </section>
            <section>
                <form>
                    <input
                        value={todoText}
                        onChange={(e) => handleTodoText(e)}
                        type="text"
                        placeholder="Type here..."
                        className="mr-2 border-2 border-amber-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"

                    />
                    <button className="cursor-pointer">Add</button>
                </form>
            </section>

        </>
    )
}