<template>
  <div class="text-center h-[100vh]">
    <header>
      <div class="wrapper">
        <nav class="space-x-4 text-lg py-9 bg-emerald-500 font-bold text-white">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>
