<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">{{ $t('navigation_home_title') }}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 16px;

  text-align: left;

  font-size: 24px;

  background-color: #e10963;

  a {
    color: white;

    text-decoration: none;
  }
}
</style>
