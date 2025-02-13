import AddButton from "../ui/addButton";
import TextInput from "../ui/textInput";
import { useState } from "react";

function AddTask({ addAction }) {

    const [taskText, setTaskText] = useState("");

    const handleAddTask = () => {
        if (taskText.trim() === "") return;
        addAction(taskText);
        setTaskText("");
    };

    return (
        <div className="flex items-center space-x-2 mb-6">
            <TextInput value={taskText} onChange={setTaskText}/>
            <AddButton addAction={handleAddTask} />
        </div>
    );
}

export default AddTask