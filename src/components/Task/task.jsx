import { useState } from "react";
import ToggleButton from "../ui/toggleButton";
import { TodoService } from "../../services/todos";

const Task = ({ id, task, completed, onToggle }) => {

    const [done, setDone] = useState(completed);

    const handleToggle = async () => {
        try {
            await TodoService.toggleTodo(id);
            setDone(!done);
            onToggle(id);
        } catch (error) {
            console.error("Error toggling todo:", error);
        }
    };

    return (

        <div className="space-y-3">
            {/* {tasks.map((task, index) => ( */}
            <div key={id} className="flex items-center justify-between p-3 my-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-900 dark:text-gray-200">{task}</span>
                {/* <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 peer-focus:ring-4 peer-focus:ring-green-400 dark:peer-focus:ring-green-600 rounded-full peer-checked:bg-green-600 dark:peer-checked:bg-green-400 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white dark:after:bg-gray-900 after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                    </label> */}
                <ToggleButton checked={done} onToggle={handleToggle} />
            </div>
            {/* ))} */}
        </div>
    );
};

export default Task;