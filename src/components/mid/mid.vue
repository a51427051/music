<template>
    <div class="mid-container">
        <div v-for="(item,i) in midimg" :key="i">
            <div class="one">
                <div class="imgBg">
                  <image :src="item.url" alt="#"/>
                </div>
                <p>{{item.text}}</p>
            </div>
        
        </div>

    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['midimg']
}
</script>

<style lang="scss">
.mid-container{
    width: 100%;
    height:140px;
    top: 125px;
    position: absolute;
    background: #ffffff;
    overflow: hidden;
    display: flex;
    color: #313131;
    z-index:0;
    padding-top: 50px;
    box-sizing: border-box;
    justify-content: space-around;
    font-size:12px;
    border-bottom: 1px solid #e2e3e4;
    .swiper-top {
        width:100%;
        height:160px;
        box-sizing: border-box;
    }
    .one {
     display:flex;
     flex-direction: column;
     align-items: center;
    }
    .imgBg{
      width:50px;
      height:50px;
      background:#e3453a;
      border-radius:50%;
      margin-bottom: 5px;
      image{
          width:30px;
          height:30px;
          margin: 10px;
          display: block
      }
    }
    
}
</style>