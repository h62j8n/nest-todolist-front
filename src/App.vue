<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
html {
  font-size: 14px;
}
#app {
  padding: 3rem;
  font-family: "Noto Sans KR", sans-serif;
  .card-header {
    padding-top: 1rem;
    padding-bottom: 0;
    background-color: transparent;
    // font-weight: 500;
    border: none;
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
