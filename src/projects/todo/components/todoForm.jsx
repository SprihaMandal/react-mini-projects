import { useState } from "react";


export const TodoForm = ({ addTodo }) => {
    const [todoText, setTodoText] = useState({ id: '', content: '', checked: false });


    const handleSubmit = (e) => {
        e.preventDefault();

    };

    const handleTodoText = (e) => {
        let c = e.target.value;
        setTodoText({ id: c, content: c, checked: false });
    }

    const handleButtonClick = () => {
        if (todoText.content === '') return;
        addTodo(todoText);
        setTodoText({ id: '', content: '', checked: false });
    }


    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    value={todoText.content}
                    onChange={handleTodoText}
                    type="text"
                    placeholder=""
                    className="w-60 mr-2 border-2 border-amber-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"

                />
                <button className="app-button" onClick={handleButtonClick}>Add</button>
            </form>
        </section>
    )

}