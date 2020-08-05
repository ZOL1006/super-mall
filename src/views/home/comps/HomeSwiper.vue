<template>
    <div>
      <swiper>
        <SwiperItem>
          轮播图
        </SwiperItem>
      </swiper>
    </div>
</template>

<script>
  import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";
  export default {
    name: "HomeSwiper",
    props: {
      banners: Array
    },
    components: {Swiper, SwiperItem},
    data(){
      return{

      }
    }
  }
</script>

<style scoped>

</style>
