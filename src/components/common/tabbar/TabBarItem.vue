<template>
  <div class="tab-bar-item" @click="itemClick(path)">
    <div v-if="!active">
      <slot name="item-default-icon"></slot>
    </div>
    <div v-else="active">
      <slot name="item-active-icon"></slot>
    </div>
    <div :class="{activeText: active}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      default: '/home'
    },
    computed:{
      active(){
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods:{
      itemClick(path){
        // .catch(err => err)  解决重复点击导航 报错信息
        this.$router.replace(path).catch(err => err)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 2px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .activeText{
    color: #d4237a;
  }
</style>
