<template>
  <div class="main-cont">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">with more menu</x-header>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld1111',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
