<template>
    <div class="scroll-top">
        <div class="top">
          <div v-for="(item,i) in top" :key="i" @click="click(i)" :class="[item.id,active == i+1 ?'active' :'']">
            {{item.name}}
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
  // props 组件
  props: ['top', 'active'],
  methods: {
    click (i) {
      // $emit 父子页面传值
      this.$emit('click', i)
    }
  }

}
</script>

<style lang="scss" scoped>
.scroll-top{
    width:100%;
    height: 40px;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    background-color: #E3453A;
    .top{
       display: flex;
      justify-content: space-around;
      color: #dbd3d3;
      font-size: 16px;
      line-height:40px;
      height: 40px;
      box-shadow: 0 2px 2px rgba(0,0,0,0.12), 0 0 6px rgba(0,0,0,0.04);

    }
    .active{
      color: #FFFFFF;
    }
}
</style>