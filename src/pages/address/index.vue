<template>
  <div>
    <scroll-t :top="top" :active="active" @click="click"></scroll-t>
  </div>
</template>

<script>
import scroll from '@/components/scroll/scroll'
import swiper from '@/components/swiper/swiper'

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

    },
    click (i) {
      this.active = i + 1
    }
  }
}
</script>

<style scoped>

</style>
