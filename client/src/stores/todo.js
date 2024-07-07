import { defineStore } from 'pinia'
import axios from 'axios'

export const useTodoStore = defineStore('todos', {
  state: () => {
    return {
      todos: [],
    }
  },
  
  actions: {
    async getTodos() {
      const response = await axios.get('http://localhost:9000/api/todos')
      console.log("TODOS => ", response.data);
      this.todos = response.data
    },
    
    async addTodo(todo) {
      const response = await axios.post('http://localhost:9000/api/todos/add', todo)
      console.log("TODOS => ", response.data);
      this.todos = [...this.todos, response.data]
    },
    
    async deleteTodo(id) {
      const response = await axios.delete(`http://localhost:9000/api/todos/delete/${id}`)
      console.log("TODOS => ", response.data);
      this.todos = this.todos.filter(todo => todo._id !== id)
    },
    
    async updateTodo(todo) {
      const response = await axios.put(`http://localhost:9000/api/todos/update/${todo._id}`, todo)
      console.log("TODOS => ", response.data);
      this.todos = this.todos.map(t => t._id === todo._id ? todo : t)
    }
  }
})