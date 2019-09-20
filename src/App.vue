<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Login">Login</router-link> |
      <router-link to="/">Home</router-link>|
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
body,html{
  width: 100%;
  height: 100%;
}
*{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100%;
}
#nav {
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
