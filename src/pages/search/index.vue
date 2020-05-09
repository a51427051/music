<template>
  <div class="contain">
    <div class="searchTop">
     <div class="inputStyle">
        <van-icon name="search" />
        <input type="text" placeholder="请输入歌手或歌曲名" v-model="search" placeholder-style="color:#EDA8A3">
        <div>
          <van-icon name="clear" @click="clearInput"/>
        </div>    
     </div>
     <span>取消</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: 'aaa'
    }
  },
  onLoad () {

  },
  methods: {
    clearInput () {
      console.log(this.search)
      this.search = ''
    }
  }
}
</script>

<style scoped lang="scss">
.searchTop{
  background: #e3453a;
  width: 100%;
  height: 100rpx;
  color: #fff;
  display: flex;
  padding: 0 10px;
  align-items: center;
  box-sizing: border-box;
  .inputStyle{
    display: flex;
    color: #EDA8A3;
    background-color: #DE655C;
    height: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex:1;
    border-radius: 20px;
    padding: 0 10px;
    box-sizing: border-box;
    input{
      color: #fff;
      flex: 1;
      outline: none;
      height: 28px;
      font-size:14px;
    }
    div{
      width:30px;
      text-align: right;
    }
  }
  span{
    margin-left: 10px;
  }
}
</style>
