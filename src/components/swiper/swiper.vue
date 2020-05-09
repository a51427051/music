<template>
    <div class="swiper-container">
        <swiper autoplay="autoplay" inerval="2000" indicator-active-color="#E3453A" indicator-color="#CABEBE" circular="true" class="swiper-top" indicator-dots="true" >
            <block v-for="(item,index) in banner" :key="index">
                <swiper-item>
                    <div class="one">
                        <image :src="item.imageUrl" alt="#"/>
                    </div>
                </swiper-item>
            </block>
        </swiper>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['banner'],
  onLoad () {
    this.getStatistics()
  },
  methods: {
    getStatistics () {
      console.log(this.banner)
    }
  }
}
</script>

<style lang="scss">
.swiper-container{
    width: 100%;
    height:160px;
    overflow: visible;
    position: absolute;
    top: 40px;
    z-index:10;
    .swiper-top {
        width:100%;
        height:160px;
        box-sizing: border-box;
    }
    .one {
     padding: 10px
    }
    image{
        width:100%;
        height:150px;
        border-radius: 10px;
    }
    
}
</style>