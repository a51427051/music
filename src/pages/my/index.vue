<template>
  <div class="content">
    <div class="head">
        <div class="headImg">
          <img src="/static/images/my/wechat-head.png" alt=""/>
        </div>
        <div class="personMsg">
          <span>怎么可当年</span>
          <img src="/static/images/my/nan.png" alt=""/>
          <img src="/static/images/my/nv.png" alt=""/>
          <p>13547854785</p>
        </div>
        <button>充值</button>
    </div>
    <div class="wallet item">
      <div class="title">
        <label>我的钱包</label>
        <div class="more">
          <span>详情></span>
          <!--<img > -->
        </div>
      </div>
      <div class="itemContent">
        <div>
          <span>2660</span>
          <span>账户余额</span>
        </div>
        <div>
          <span>13</span>
          <span>积分</span>
        </div>
        <div>
          <span>2</span>
          <span>优惠券</span>
        </div>
      </div> 
    </div>
    <div class="appointment item oneItem">
      <div class="title">
        <label>我的预约</label>
        <div class="more">
          <span>今日有<span class="num">1</span>次预约待服务 ></span>
          <!--<img > -->
        </div>
      </div>
    </div>
    <div class="setMeal item">
      <div class="title">
        <label>我的套餐</label>
        <div class="more">
          <span>共<span class="num">3</span>张</span>
        </div>
      </div>
      <div class="setMealContent">
        <div class="setMealImg"></div>
        <div class="details">
            <p>护理10次套餐</p>
            <p class="timeRange">有效期至<span>2020/03/09</span></p>
            <div class="number">
              <span>9</span>/{{10}}次
            </div>
        </div>
        <div class="changeNext"></div>
      </div>
    </div>
    <div class="setMeal item">
      <div class="title">
        <label>商城订单</label>
        <div class="more">
          <span>全部订单></span>
        </div>
      </div>
      <div class="itemContent orderContent">
        <div>
          <div class="orderIcon">
            <img src="/static/images/my/home-active.png" alt="" mode="heightFix"/>
          </div>
          <span>待付款</span>
        </div>
        <div>
           <div class="orderIcon">
            <img src="/static/images/my/home-active.png" alt="" mode="heightFix"/>
            <div>10</div>
          </div>
          <span>待发货</span>
        </div>
        <div>
           <div class="orderIcon">
            <img src="/static/images/my/home-active.png" alt="" mode="heightFix"/>
          </div>
          <span>已发货</span>
        </div>
        <div>
           <div class="orderIcon">
            <img src="/static/images/my/home-active.png" alt="" mode="heightFix"/>
          </div>
          <span>已完成</span>
        </div>
      </div> 
    </div>
    <div class="address item oneItem" @click="openAddress">
      <div class="title">
        <label>收货地址</label>
        <div class="more">
          <span>></span>
          <!--<img > -->
        </div>
      </div>
    </div>
    <div class="address item oneItem">
      <div class="title">
        <label>门店信息</label>
        <div class="more">
          <span>清水芙蓉美容美业></span>
          <!--<img > -->
        </div>
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

  components: {

  },

  methods: {

  },

  created () {
    // let app = getApp()
  }
}
</script>

<style lang="scss" scoped>
.content{
  width: 100%;
  height: auto;
  min-height: 100vh;
  background: #FFF8FA;
  font-family:Source Han Sans CN;
  padding-bottom: 20px;
  box-sizing: border-box;
}
.head{
  display: flex;
  align-items: center;
  padding: 11px 22px 15px;
  background: #FF8CB5;
  color: #FFFFFF;
  .headImg{
    width: 70px;
    height: 70px;
    margin-right: 15px;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .personMsg{
    font-weight:500;
    span{
      font-size: 18px;
    }
    p{
      font-size: 16px;
      margin-top: 10px;
    }
    img{
      width:18px;
      height:18px;
      margin-left: 7px
    }
  }
  button{
    margin-right: 0;
    border-radius: 11px;
    height: 22px;
    color: #FF4D8C;
    font-size: 14px;
    line-height: 22px;
  }
}
.item{
  background: #FFFFFF;
  margin: 10px 22px 0;
  box-shadow:0px 0px 11px 0px rgba(190,190,190,0.4);
  border-radius:5px;
  font-size:14px;
  box-sizing: border-box;
  .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:30px;
    padding: 0 10px;
    label{
      color:rgba(0,0,0,1);
    }
    .more{
      color: #919191;
      font-size:14px;
    }
    .num{
      color: #FF8CB5;
    }
  }
  .itemContent{
    border-top:1px solid rgba(238,238,238,1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 86px;
    div{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    span:first-child{
      font-size:32px;
      font-weight:bold;
      color:rgba(255,140,181,1);
    }
    span:last-child{
      font-size:14px;
      font-weight:400;
      color:rgba(0,0,0,1);
    }
  }
}
.oneItem .title{
  height:40px;
}
.setMealContent{
  display: flex;
  border-top:1px solid rgba(238,238,238,1);
  height: 92px;
  padding: 10px 0;
  box-sizing: border-box;
  .setMealImg{
    width:117px;
    height:73px;
    background:rgba(255,140,181,1);
    opacity:0.2;
    border-radius:5px;
    margin: 0 10px;
  }
  .changeNext{
    width:18px;
    height:73px;
    background:rgba(255,230,239,1);
    border-radius:5px;
    margin-left: auto;
    margin-right: 5px;
  }
  .details{
    position: relative;
    flex: 1;
    font-size:16px;
    line-height:20px;
    font-weight:400;
    color:rgba(2,2,2,1);
    .timeRange{
      font-size:12px;
      color:rgba(145,145,145,1);
      span{
        color:#FF8CB5;
        margin-left:5px
      }
    }
    .number{
      position:absolute;
      right: 13px;
      bottom: 0;
      font-size:12px;
      color:rgba(145,145,145,1);
      span{
        font-size:17px;
        color:rgba(255,140,181,1);
      }
    }
  }
}
.orderContent .orderIcon{
  margin-bottom: 10px;
  position:relative;
  img{
    height: 33px;
  }
  div{
    position:absolute;
    min-width:15px;
    min-height:15px;
    background:rgba(230,0,18,1);
    border-radius:50%;
    font-size:9px;
    font-weight:bold;
    color:rgba(255,255,255,1);
    right: 0;
  }
}
</style>
