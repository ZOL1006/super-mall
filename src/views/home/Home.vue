<template>
    <div>
      <nav-bar class="home-nav">
        <div slot="center">购物街</div>
      </nav-bar>
      <div>
        <home-swiper :banners="banners" class="home-swiper"></home-swiper>
        <home-recommend :recommends="recommends" class="home-recommend"></home-recommend>
        <home-popular :populars="populars" class="home-popular"></home-popular>
        // ...
      </div>
    </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  import HomeSwiper from "./comps/HomeSwiper"
  import HomeRecommend from "./comps/HomeRecommend";
  import HomePopular from "./comps/HomePopular"

  import { getData } from "network/home"

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomePopular
    },
    data(){
      return{
        banners: [],
        recommends: [
          {link: '/1', imageURL: '/1.jpg', text: '推荐一'},
          {link: '/2', imageURL: '/2.jpg', text: '推荐二'},
          {link: '/3', imageURL: '/3.jpg', text: '推荐三'},
          {link: '/4', imageURL: '/4.jpg', text: '推荐四'}
        ],
        populars: [
          {link: '/1', imageURL: '/5.jpg', text: '每周流行一'},
          {link: '/1', imageURL: '/5.jpg', text: '每周流行一'},
          {link: '/1', imageURL: '/5.jpg', text: '每周流行一'},
          {link: '/1', imageURL: '/5.jpg', text: '每周流行一'}
        ]
      }
    },
    created() {
      // getData().then(res => {
      //   this.data = res
      // }).catch(err => {
      //   console.log(err)
      // })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    /* div 吸顶效果 */
    /*position: sticky;*/
  }
  .home-swiper{
    height: 160px;
  }
  .home-recommend{
    height: 120px;
  }
  .home-popular{
    height: 240px;
  }
</style>
