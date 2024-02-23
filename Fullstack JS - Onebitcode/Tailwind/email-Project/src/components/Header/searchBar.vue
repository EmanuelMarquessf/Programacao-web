<template>
  <form class="min-w-0 flex-grow flex" @click.prevent="">
    <input
      class="min-w-0 w-full p-2 rounded-l-lg border-2 border-transparent bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:outline-none focus:border-primary-400 transition-colors"
      type="text"
      placeholder="Pesquisar..."
    />
    <button
      class="min-w-0 py-2 px-4 bg-gray-200 dark:bg-gray-700 rounded-r-lg border-2 border-transparent focus:outline-none focus:border-primary-400 transition-colors"
    >
      <i
        class="bx bx-search-alt-2 text-gray-900 dark:text-gray-50 focus:text-primary-400 focus:dark:font-primary-400"
      ></i>
    </button>
  </form>
</template>
