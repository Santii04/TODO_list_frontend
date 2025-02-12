import { useState } from "react";
import Task from "../components/Task/task";

export default function Home() {
    const [done, setDone] = useState({})

    const onChange = (event) => {
        // Handle onchange
    }
    // Handle UseEffect

    return (
    <main className="w-screen px-40">
        <Task> </Task>
    </main>)
}

