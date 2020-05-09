<template>
  <div>
    <scroll-t :top="top" :active="active" @click="click"></scroll-t>
  </div>
</template>

<script>
import scroll from '@/components/scroll/scroll'
import swiper from '@/components/swiper/swiper'
import fly from '@/utils/flyio'

export default {
  data () {
    return {
      menu: [],
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
    'scroll-t': scroll
  },
  methods: {
    getList () {
      fly
        .get('demo#!method=get')
        .then(res => {
          this.menu = res.data.data.menu
          this.midimg = res.data.data.midimg
          // this.saveMidimg2(res.data.data.midimg2)
          // this.saveDetailState(res.data.data.footimg)
          // this.saveMidimg3(res.data.data.midimg3)
          this.footimg2 = res.data.data.footimg2
          this.footimg3 = res.data.data.footimg
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
