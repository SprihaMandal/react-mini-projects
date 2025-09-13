import { useEffect, useState } from "react"
import { TodoForm } from "./components/todoForm";
import { TodoListItem } from "./components/todoListItem";
import { getTodoLocalData, setTodoLocalData } from "./components/todoLocalStorage";


export const TodoApp = () => {
    const [todoArr, setTodoArr] = useState(() => getTodoLocalData());
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            let date = new Date;
            setDateTime(`${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    setTodoLocalData(todoArr);


    const handleButtonClick = (props) => {
        const exists = todoArr.some((obj) => obj.content === props.content);
        if (exists === true) return;

        setTodoArr((prevArr) => [...prevArr, props]);
        //console.log will use stale state as updating is still scheduling
    }

    const handleClearAll = () => {
        setTodoArr([]);
    }

    const handleDeleteItem = (ele) => {
        let updatedTodo = todoArr.filter((todo) => todo.content !== ele.content);
        setTodoArr(updatedTodo);
    }

    const handleCheckedEle = (obj) => {
        let updatedArr = todoArr.map((todo) => (todo.content === obj.content) ? { ...todo, checked: !obj.checked } : todo);
        setTodoArr(updatedArr);
    }

    return (
        <div className="border-1 border-amber-300 p-12 rounded-3xl shadow-amber-700 shadow-xl">
            <section className="my-3 text-center">
                <div>
                    <h1>TODO APP</h1>
                    <h2>{dateTime}</h2>
                </div>
            </section>
            <TodoForm addTodo={handleButtonClick} />

            <section className="mt-3">
                {todoArr.map((ele, index) => <TodoListItem key={index} todoItem={ele} deleteTodo={handleDeleteItem} checkedTodo={handleCheckedEle} />)}
            </section>

            <div className="text-center">
                <button className="app-button" onClick={handleClearAll}>Clear All</button>
            </div>



        </div>
    )
}