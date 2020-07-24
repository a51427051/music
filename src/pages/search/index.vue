<template>
  <div class="contain">
    <div class="searchTop">
     <div class="inputStyle">
        <van-icon name="search" />
        <input type="text" placeholder="请输入歌手或歌曲名" v-model="search" placeholder-style="color:#EDA8A3" @input="changeInput" confirm-type="search" @confirm='searchSong'>
        <div>
          <van-icon name="clear" @click="clearInput"/>
        </div>    
     </div>
     <span @click="jumpIndex">取消</span>
    </div>

    <!-- 热门搜索 -->
    <div class="searchContent searchHot">
      <p>热门搜索</p>
      <div class="searchItem">
        <span v-for="(item,i) in hotList" :key="i">{{item.first}}</span>
      </div>
    </div>

    <!-- 搜索历史 -->
    <div class="searchContent searchHistory">
      <p>热门搜索</p>
      <van-icon name="clear" @click="clearHistory" size="20px"/>
      <div class="searchItem">
        <span v-for="(item,i) in history" :key="i">{{item}}</span>
      </div>
    </div>

    <!-- 搜索建议 -->
    <div class="searchSuggest" v-if="searchSuggest">
      <p v-for="(item,i) in suggestList" :key="i" @click="clickSong(item.keyword)" >
        {{item.keyword}}
      </p>
    </div>

    <!-- 搜索结果 -->
    <div class="searchSuggest searchSongList" v-if="songListHtml">
      <div v-for="(item,i) in songList" :key="i" @click="chooseSong(item.keyword)" >
        <p>{{item.name}}</p>
        <span>{{item.artists[0].name}} - {{item.album.name}}</span>
      </div>    
    </div>

  </div>
</template>

<script>
import {getSearchHot, getSearchSuggest, getSearchList} from '@/api/api'
export default {
  data () {
    return {
      hotList: [],
      search: '',
      suggestList: [],
      searchSuggest: false,
      history: wx.getStorageSync('history') || [],
      songList: [],
      songListHtml: false
    }
  },
  onLoad () {
    this.getSearchHot()
  },
  methods: {
    clearInput () {
      console.log(this.search)
      this.search = ''
      this.suggestList = []
      this.searchSuggest = false
      this.songListHtml = false
      this.songList = []
    },
    jumpIndex () {
      this.$router.go(-1)
    },
    getSearchHot () {
      getSearchHot({ type: 'news' })
        .then(response => {
          this.hotList = response.data.result.hots
        })
    },
    // 搜索建议
    changeInput (e) {
      var suggest = e.mp.detail.value
      if (suggest !== '') {
        getSearchSuggest({ type: 'mobile', keywords: suggest })
          .then(response => {
            if (JSON.stringify(response.data.result) === '{}') {
              this.suggestList = []
              this.searchSuggest = false
            }
            this.suggestList = response.data.result.allMatch
            this.searchSuggest = this.suggestList.length > 0 ? 'true' : 'false'
            this.songListHtml = false
            this.songList = []
          })
      } else {
        this.searchSuggest = false
        this.suggestList = []
      }
    },
    // 清空搜索历史
    clearHistory () {
      var that = this
      wx.removeStorage({
        key: 'history',
        success (res) {
          that.history = []
        }
      })
    },
    // 搜索歌曲
    searchSong () {
      this.history.push(this.search)
      wx.setStorage({
        key: 'history',
        data: this.history
      })
    },
    // 点击歌曲搜索
    clickSong (e) {
      var suggest = e
      if (suggest !== '') {
        getSearchList({type: '1', keywords: suggest, 'limit': '100', offset: '2'})
          .then(response => {
            if (JSON.stringify(response.data.result) !== '{}') {
              this.songList = response.data.result.songs
              this.songListHtml = this.songList.length > 0 ? 'true' : 'false'
            }
          })
      } else {
        this.songListHtml = false
        this.songList = []
      }
    }
  }
}
</script>

<style scoped lang="scss">
.contain{
  position: relative;

}
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
.searchContent{
  padding: 20px;
  position: relative;
  p{
    color: #e3453a;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .searchItem{
    span{
      padding: 0 5px;
      color: #e3453a;
      background: #1111;
      margin: 0 10px 10px 0;
      border-radius: 4px;
      line-height: 28px;
      height: 28px;
      display: inline-block;
    }
  }
  van-icon{
    position: absolute;
    right: 20px;
    top: 20px;
    color: #e3453a;
  }
}
.searchSuggest{
  position: absolute;
  background: #ffffff;
  top: 50px;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  p{
    padding: 0 10px;
    line-height: 40px;
    height: 40px;
    border-bottom: 1px solid #eaeaea;
    overflow: hidden;
    text-overflow: ellipisis;
    max-width: 100%;
  }
}
.searchSongList{
    div{
      padding: 0 10px;
      border-bottom: 1px solid #eaeaea;
      overflow: hidden;
      text-overflow: ellipisis;
      max-width: 100%;
      p{
        border-bottom: 0;
        line-height: 30px;
        height: 30px;
        padding: 0
      }
      span{
        line-height: 20px;
        font-size: 13px
      }
    }
}
</style>
