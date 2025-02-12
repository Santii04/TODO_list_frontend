import ToggleButton from "../ui/toggleButton";
import { useState } from "react";

function Task() {
    const [isCompleted, setIsCompleted] = useState(false);

    return (
        <div className="flex items-center justify-between gap-3 rounded-xl border-2 px-10 py-4">
            <span className="text-lg">{isCompleted ? "✅ Completada" : "❌ Pendiente"}</span>
            <ToggleButton checked={isCompleted} onToggle={() => setIsCompleted(!isCompleted)} />
        </div>
    )
}

export default Task;