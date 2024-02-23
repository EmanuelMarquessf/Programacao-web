export default defineNuxtRouteMiddleware((to, from) => {
  console.log('Hello from middleware GLOBAL')
  const authTest = false

  if(!authTest){
    console.log('teste')
    return navigateTo('/')
  }
  if (to.path !== '/') {
  }
})