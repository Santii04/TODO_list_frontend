import Task from "../components/Task/task";
import AddTask from "../components/Task/addTask";
import { useEffect, useState } from "react";
import { TodoService } from "../services/todos";

export default function Home() {

    const [tasks, setTasks] = useState([]);

    useEffect(
        () => {
            async function fetchTasks() {
                try {
                    const response = await TodoService.listTodos();
                    setTasks(response.data);
                } catch (error) {
                    console.error("Error fetching tasks:", error);
                }
            }
            fetchTasks();
        }
        , [])

    const addTask = async (task) => {
        try {
            const response = await TodoService.addTodo(task);
            setTasks([...tasks, response.data]);
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    const handleToggleTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <main className="w-full px-40 rounded-xl drop-shadow-xl">
            <main className="w-full">
                <div className="w-150 bg-gray-800 p-8 rounded-lg">
                    <AddTask addAction={addTask} />
                    {(tasks.length > 0 ?
                        tasks.map((task) => (
                            <Task
                                key={task.id}
                                id={task.id}
                                task={task.task}
                                completed={task.completed}
                                onToggle={handleToggleTask}
                            />
                        )) :
                        <p className="dark:text-white text-xl">No Tasks</p>)}


                </div>
            </main>

        </main>)

}

