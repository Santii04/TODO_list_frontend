import axios from "./axios";

export const todosApi = {
    path:'/todos',
    async getAllTodos() {
        return await axios.get("/todos");
    },
    async addTodo(task) {
        return await axios.post("/todos", null, {params: {task: task}})
    },
    async toggleTodo(id){
        return await axios.put(`todos/${id}/toggle`)
    }
}