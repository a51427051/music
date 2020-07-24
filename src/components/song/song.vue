<template>
    <div class="song-container">
        <div class="oneSong" v-for="(item,index) in song" :key="index">
            <image :src="item.picUrl" alt="#" mode="widthFix"/>
            <p>{{item.name}}</p>
            <div class="artlist">
                <span  v-for="(art,i) in item.song.artists" :key="i">{{art.name}}</span>
            </div>       
        </div>
    </div>
</template>

<script>
import {getNewSong} from '@/api/api'

export default {
  data () {
    return {
      song: []
    }
  },
  onLoad () {
    this.getNewSong()
  },
  methods: {
    getNewSong () {
      getNewSong()
        .then(response => {
          const song = response.data.result
          this.song = song.slice(0, 6)
        })
    }
  }
}
</script>

<style lang="scss">
.song-container{
    overflow: visible;
    margin: 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    z-index:10;
    .oneSong{
      width: 30%;
      image{
        width:100%;
        border-radius: 10px;
      }
      p{
          font-size: 14px;
          margin-top: 15px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      .artlist{
         margin-bottom: 15px;
         overflow: hidden;
        height: 20px;
        text-overflow: ellipsis;
        span{
          font-size: 12px;
          color: #6c6a6a;        
        }
        span::after{
          content: '/'
        }
        span:last-child::after{
          content:''
        }
      }
    }
    
    
}
</style>