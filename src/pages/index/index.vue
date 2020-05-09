<template>
  <div>
    <div class="top">
      <div class="search" @click="jumpSearch">
        <van-icon name="search" />
        <p>请输入歌手或歌曲名</p>
      </div>
      <scroll-t :top="top" :active="active" @click="click"></scroll-t>
    </div>
    
    <swiper-t :banner="banner"></swiper-t>
    <mid-t :midimg="midList"></mid-t>
  </div>
</template>

<script>
import scroll from '@/components/scroll/scroll'
import swiper from '@/components/swiper/swiper'
import mid from '@/components/mid/mid'
import {getBanner} from '@/api/api'

export default {
  data () {
    return {
      banner: [],
      top: [
        {
          id: 'left',
          name: '推荐'
        },
        {
          id: 'content',
          name: '朋友'
        },
        {
          id: 'right',
          name: '电台'
        }
      ],
      midList: [
        {
          url: '/static/images/index/fm.png',
          text: '私人FM'
        },
        {
          url: '/static/images/index/ping.png',
          text: '每日推荐'
        },
        {
          url: '/static/images/index/song.png',
          text: '歌单'
        },
        {
          url: '/static/images/index/pai.png',
          text: '排行榜'
        }
      ],
      active: 1
    }
  },
  onLoad () {
    this.getBanner()
  },
  components: {
    'swiper-t': swiper,
    'scroll-t': scroll,
    'mid-t': mid
  },
  methods: {
    getBanner () {
      getBanner()
        .then(response => {
          const banner = response.data.banners
          this.banner = banner
        })
    },
    click (i) {
      this.active = i + 1
    },
    jumpSearch () {
      this.$router.push({path: '/pages/search/main'})
    }
  }
}
</script>

<style scoped lang="scss">
.top{
    width:100%;
    height: 77x;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    background-color: #E3453A;  
    .search{
      display: flex;
      color: #EDA8A3;
      background-color: #DE655C;
      margin: 0 20px;
      border-radius: 20px;
      height: 28px;
      font-size: 14px;
      justify-content: center;
      align-items: center;
      van-icon{
        margin-right: 10px
      }
    }
}
</style>
