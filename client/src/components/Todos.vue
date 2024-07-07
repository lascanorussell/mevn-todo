<template>
  <div class="flex flex-col justify-center items-center">
    <!-- {{ todos }} -->
    <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[350px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">

      <div class="h-full w-full">
        
        <div 
        v-for="todo in todos" :key="todo._id"
        class="mt-5 flex items-center justify-between p-2">
          <div class="flex items-start justify-center gap-2">
            <input @change="toggleTodo($event, todo)" type="checkbox"
              class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                    justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                    checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 mt-1"
              name="weekly" :checked="todo.completed"/>
            <p class="text-base font-bold text-navy-700 dark:text-white ml-4 text-left" :class="todo.completed ? 'line-through' : ''">
              {{ todo.title }}
            </p>
          </div>
          <span @click="deleteTodo(todo)" class="material-symbols-rounded h-6 w-6 text-navy-700 dark:text-white cursor-pointer">
            delete
          </span> 
        </div>

        <!-- <div class="mt-2 flex items-center justify-between p-2">
          <div class="flex items-start justify-center gap-2">
            <input type="checkbox"
              class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                    justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                    checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 mt-1"
              name="weekly" checked />
            <p class="text-base font-bold text-navy-700 dark:text-white ml-4">
              Mobile App Design
            </p>
          </div>
        </div>

        <div class="mt-2 flex items-center justify-between p-2">
          <div class="flex items-start justify-center gap-2">
            <input type="checkbox"
              class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                    justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                    checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 mt-1"
              name="weekly" checked />
            <p class="text-base font-bold text-navy-700 dark:text-white ml-4">
              Dashboard Builder
            </p>
          </div>
        </div>

        <div class="mt-2 flex items-center justify-between p-2">
          <div class="flex items-start justify-center gap-2">
            <input type="checkbox"
              class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                    justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                    checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 mt-1"
              name="weekly" />
            <p class="text-base font-bold text-navy-700 dark:text-white ml-4">
              Landing Page Design
            </p>
          </div>
        </div>

        <div class="mt-2 flex items-center justify-between p-2">
          <div class="flex items-start justify-center gap-2">
            <input type="checkbox"
              class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                    justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                    checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400 mt-1"
              name="weekly" />
            <p class="text-base font-bold text-navy-700 dark:text-white ml-4">
              Dashboard Builder
            </p>
          </div>
        </div> -->
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from '../stores/todo';

const { todos } = defineProps(['todos']);
const storeTodo = useTodoStore();

const toggleTodo = (e, todo) => {
  console.log(e.target.checked, todo._id);
  storeTodo.updateTodo({
    _id: todo._id,
    title: todo.title,
    completed: e.target.checked
  })
}

const deleteTodo = (todo) => {
  console.log(todo._id);
  storeTodo.deleteTodo(todo._id);
}

</script>

<style></style>