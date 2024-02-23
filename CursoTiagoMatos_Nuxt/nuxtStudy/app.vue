<template>
  <NuxtLayout>
    <header class="bg-blue-100">
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li><nuxt-link to="/events">Event</nuxt-link></li>
        <li><nuxt-link to="/events/users-[teste]/1">Users</nuxt-link></li>
      </ul>
    </header>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
