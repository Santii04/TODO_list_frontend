function TextInput({value, onChange}) {
    return (
        <input
            type="text"
            placeholder="Type a task"
            className="flex-grow px-4 py-2 bg-gray-400 text-black dark:text-black rounded-lg"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default TextInput;