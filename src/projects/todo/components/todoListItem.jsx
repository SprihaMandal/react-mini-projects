import { MdDoneOutline, MdDelete } from "react-icons/md";
import '../todo.css';

export const TodoListItem = ({ todoItem, deleteTodo, checkedTodo }) => {
    const { id, content, checked } = todoItem;

    return (
        <div className="flex"><span className={`mr-6 w-50 ${checked ? 'striked' : ""}`}>{content}</span> <MdDoneOutline onClick={() => checkedTodo(todoItem)} className="mt-1 ml-4 cursor-pointer" />
            <MdDelete className="mt-1 ml-4 cursor-pointer" onClick={() => deleteTodo(todoItem)} />
        </div>
    )
}