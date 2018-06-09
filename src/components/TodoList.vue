<template>
  <div class="wrapper">
    <div class="date-head">
      <div class="date">
        <div class="ib vam day">12</div>
        <div class="ib vam year-month">
          <span class="month">MAR</span>
          <span class="year">2018</span>
        </div>
      </div>
      <div class="week">TUESDAY</div>
    </div>
    <ul class="todo-list">
      <li>
        <div class="content">xxxx</div>
        <div class="action">完成</div>
      </li>
    </ul>
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
    padding: .5rem;
    background-color: #FFF;
  }
  .date-head {
    height: 1rem;
        font-weight: bold;
    overflow: hidden;
  }
  .date {
    float: left;
    width: 33%;
  }
  .day {
    height: 1rem;
    line-height: 1rem;
  }
  [data-dpr="1"] .day {
    font-size: 32px;
  }
  [data-dpr="2"] .day {
    font-size: 64px;
  }
  [data-dpr="3"] .day {
    font-size: 96px;
  }
  .year-month {
    width: 1rem;
  }
  .year, .month {
    height: .5rem;
    line-height: .5rem;
  }
  .week {
    float: right;
    width: 33%;
    height: 1rem;
    line-height: 1rem;
  }
    [data-dpr="1"] .week {
    font-size: 16px;
  }
  [data-dpr="2"] .week {
    font-size: 32px;
  }
  [data-dpr="3"] .week {
    font-size: 48px;
  }
</style>
