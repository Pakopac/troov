<template>
  <div>
    <h1>Welcome!</h1>
    <NLink to="/register">
      register
    </NLink>
    <NLink to="/login">
      login
    </NLink>
     <NLink to="/anime/list">
      list
    </NLink>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home page',
  },
  middleware: 'home'
}
</script>