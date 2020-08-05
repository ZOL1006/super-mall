<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="~assets/img/tabbar/home_default.svg" alt="home" slot="item-default-icon">
        <img src="~assets/img/tabbar/home_active.svg" alt="home" slot="item-active-icon">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/type">
        <img src="~assets/img/tabbar/type_default.svg" alt="type" slot="item-default-icon">
        <img src="~assets/img/tabbar/type_active.svg" alt="type" slot="item-active-icon">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shop">
        <img src="~assets/img/tabbar/shop_default.svg" alt="shop" slot="item-default-icon">
        <img src="~assets/img/tabbar/shop_active.svg" alt="shop" slot="item-active-icon">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/me">
        <img src="~assets/img/tabbar/me_default.svg" alt="me" slot="item-default-icon">
        <img src="~assets/img/tabbar/me_active.svg" alt="me" slot="item-active-icon">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "../../common/tabbar/TabBar";
  import TabBarItem from "../../common/tabbar/TabBarItem";

  export default {
    name: "MainBar",
    components: {TabBar,TabBarItem}
  }
</script>

<style scoped>

</style>
