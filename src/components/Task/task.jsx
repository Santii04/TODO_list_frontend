const TaskList = ({ tasks }) => {
    return (
        <main className="w-full">
            <div className="w-150 bg-gray-800 p-8 rounded-lg">
                <div className="flex items-center space-x-2 mb-6">
                    <input 
                        type="text" 
                        placeholder="Type a task" 
                        className="flex-grow px-4 py-2 bg-gray-400 text-gray-950 dark:text-gray-100 rounded-lg" 
                    />
                    <button className="bg-green-500 dark:text-green-600 p-3 rounded-full">+</button>
                </div>
                <div className="space-y-3">
                    {tasks.map((task, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-200 dark:bg-gray-700 rounded-lg">
                            <span className="text-gray-900 dark:text-gray-200">{task}</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 peer-focus:ring-4 peer-focus:ring-green-400 dark:peer-focus:ring-green-600 rounded-full peer-checked:bg-green-600 dark:peer-checked:bg-green-400 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white dark:after:bg-gray-900 after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default TaskList;