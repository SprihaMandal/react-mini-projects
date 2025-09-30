import { useEffect, useReducer, useState } from "react"
import { TodoForm } from "./components/todoForm";
import { TodoListItem } from "./components/todoListItem";
import { getTodoLocalData, setTodoLocalData } from "./components/todoLocalStorage";


export const TodoReducer = () => {
    const [todoArr, dispatch] = useReducer(todoReducer, [], () => getTodoLocalData());
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            let date = new Date;
            setDateTime(`${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setTodoLocalData(todoArr);

    }, [todoArr]);

    function todoReducer(state, action) {
        switch (action.type) {
            case "ADD":
                return [...state, action.payload];

            case "DELETE":
                return state.filter((todo) => todo.content !== action.payload.content);

            case "TOGGLE":
                return state.map((todo) =>
                    todo.content === action.payload.content
                        ? { ...todo, checked: !todo.checked }
                        : todo
                );

            case "CLEAR_ALL":
                return [];

            default:
                return state;
        }

    }



    const handleButtonClick = (props) => {

        dispatch({ type: "ADD", payload: props });
    }

    const handleClearAll = () => {
        dispatch({ type: "CLEAR_ALL" });
    }

    const handleDeleteItem = (ele) => {
        dispatch({ type: "DELETE", payload: ele });

    }

    const handleCheckedEle = (obj) => {
        dispatch({ type: "TOGGLE", payload: obj });

    }

    return (
        <div className="border-1 border-amber-300 p-12 rounded-3xl shadow-amber-700 shadow-xl mt-4">
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