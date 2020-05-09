<template>
  <div>
    <scroll-t :top="top" :active="active" @click="click"></scroll-t>
    <swiper-t :banner="banner"></swiper-t>
    <mid-t></mid-t>
  </div>
</template>

<script>
import scroll from '@/components/scroll/scroll'
import swiper from '@/components/swiper/swiper'
import mid from '@/components/mid/mid'
import fly from '@/utils/flyio'

export default {
  data () {
    return {
      banner: [],
      midimg: [],
      footimg2: [],
      footimg3: [],
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
      active: 1
    }
  },
  onLoad () {
    this.getList()
  },
  components: {
    'swiper-t': swiper,
    'scroll-t': scroll,
    'mid-t': mid
  },
  methods: {
    getList () {
      fly
        .get('banner#!method=get')
        .then(res => {
          this.banner = res.data.banners
          console.log(this.banner)
        }).catch(e => {
          console.log(e)
        })
    },
    click (i) {
      this.active = i + 1
    }
  }
}
</script>

<style scoped>

</style>
