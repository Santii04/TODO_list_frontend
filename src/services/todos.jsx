import { todosApi } from "../api/todos"

export const TodoService = {
    async listTodos() {
        return await todosApi.getAllTodos();
    },
    async addTodo(task) {
        return await todosApi.addTodo(task);
    },
    async toggleTodo(id) {
        return await todosApi.toggleTodo(id);
    }
}