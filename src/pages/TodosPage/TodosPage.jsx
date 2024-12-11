import Todo from "../../components/Todo";
import styles from './TodosPage.module.css';

const Todos = ["todo 1", "todo 2", "todo 3"];

function TodoPage() {
    return (
        <div className={styles.todosPage}>
            <h1>Todos Page</h1>
            {Todos.map((todo, index) => (
                <Todo key={index} todo={todo} />
            ))}
        </div>
    );
}

export default TodoPage;
