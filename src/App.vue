<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import url('https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css');

body {
  background-color: #fbf9fe;
}
</style>
