<template>
    <div class="foot-container">
        <p>{{footname}}</p>
        <div v-for="(item,i) in footing" :key="i">
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
  props: ['footing', 'footname'],
  mounted () {
    this.getStatistics()
  },
  methods: {
    getStatistics () {
      console.log(this.footname)
    }
  }
}
</script>

<style lang="scss">
.foot-container{
    width: 100%;
    height:140px;
    top: 265px;
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
}
</style>
