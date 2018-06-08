<template>
  <div class="wrapper">
    <div class="date-head">
      <div class="date">
        <div class="day">12</div>
        <div class="year-month">
          <span class="month">MAR</span>
          <span class="year">2018</span>
        </div>
      </div>
      <div class="week">TUESDAY</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper {
    padding: 1rem;
    background-color: #FFF;
  }
</style>
