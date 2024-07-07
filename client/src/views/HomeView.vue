<template>
  <div class="container mx-auto px-4 p-9">
    <h1 class="text-3xl font-bold underline text-center">
      MEVN TODO
    </h1>
    <div>
      <div class="flex gap-4 justify-center my-8">
        <!-- Input: Designation [h-12] & min-w-[12rem] -->
        <input v-model="todo" class="h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600" type="text" placeholder="Add new todo" />
        <!-- Button: Submit [h-12] -->
        <button @click="addTodo" class="h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600">Submit</button>
      </div>
    </div>
    
    <Todos :todos="todos"/>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useTodoStore } from '../stores/todo';
import Todos from '../components/Todos.vue';

const storeTodo = useTodoStore();
const todo = ref('');

const todos = computed(() => storeTodo.todos);

onMounted(() => {
  storeTodo.getTodos()
})



const addTodo = async () => {
  console.log("Add", todo.value);
  if(!todo.value) return
  
  await storeTodo.addTodo({
    title: todo.value,
    completed: false
  }).then(() => {
    todo.value = '';
  })
  
}
</script>
