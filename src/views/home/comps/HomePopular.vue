<template>
  <div class="popular">
    <div v-for="item in populars">
      <a :href="item.link">
        <div>123</div>
      </a>
    </div>
    </div>
</template>

<script>
  export default {
    name: "HomePopular",
    props: {
      populars: Array
    },
    data(){
      return{
      }
    }
  }
</script>

<style scoped>
  .popular{
    display: flex;
    line-height: 60px;
    text-align: center;
    background-color: #eee;
  }
  .popular>div{
    flex: 1;
  }
</style>
