<template>
    <div class="recommend">
      <div v-for="item in recommends">
        <a :href="item.link">
          <div>{{item.imageURL}}</div>
<!--          <img :src="item.imageURL" alt="">-->
          <div>{{item.text}}</div>
        </a>
      </div>
    </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommends: Array
    },
    data(){
      return{
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    line-height: 60px;
    text-align: center;
    background-color: #eee;
  }
  .recommend>div{
    flex: 1;
  }
  .recommend>div>a{
    cursor:pointer
  }

  .recommend>div>a>img{
    width: 60px;
    height: 60px;
    border: 1px solid #d4237a;
  }

  .recommend>div>a>div{
    color: #333;
  }
</style>
