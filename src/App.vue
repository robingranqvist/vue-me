<template>
  <div id="app">
    <div class="wrapper">
      <app-nav></app-nav>
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
  }

  body {
    background: #3C465C;
    color: #333;
  }

  p {
    font-size: 20px;
    line-height: 30px;
  }

  a {
    text-decoration: none;
    color: #333;
    transition: all 150ms ease-in-out;
    border-bottom: 1px solid #333;
    padding-bottom: 5px;
  }

  a:hover {
    opacity: 0.7;
    padding-bottom: 7px;
  }

  .wrapper {
    background: #f4f4f4;
    width: 700px;
    margin: 0 auto;
    padding: 50px;
    -webkit-box-shadow: 10px 10px 51px -24px rgba(0,0,0,0.15);
    -moz-box-shadow: 10px 10px 51px -24px rgba(0,0,0,0.15);
    box-shadow: 10px 10px 51px -24px rgba(0,0,0,0.15);
    border-radius: 4px;
  }

  .nav {
    margin-bottom: 50px;
  }

  .nav-link {
    margin-right: 50px;
    font-size: 20px;
  }

</style>
