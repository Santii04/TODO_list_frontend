import { useState } from "react";
import Task from "../components/Task/task";

export default function Home() {
    const [done, setDone] = useState({});
    const tasks = ['Task 1', 'Task 2', 'Task 3']; // Ejemplos 

    const onChange = (event) => {
        // Handle onchange
    }
    // Handle UseEffect

    return (
        <main className="w-full px-40">
            <Task tasks={tasks}> </Task>
        </main>) 

}

