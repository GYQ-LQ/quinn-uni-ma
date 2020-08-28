<template name="home">
  <scroll-view scroll-y class="page">
    <swiper
      class="swiper"
      indicator-dots="true"
      autoplay="true"
      interval="2500"
      indicator-active-color="#07c160"
      indicator-color="#dbdbdb"
    >
      <swiper-item v-for="(item, index) in swiperList" :key="index">
        <van-image width="100%" height="100%" fit="cover" :src="item" />
      </swiper-item>
    </swiper>

    <view
      class="grid col-2 padding-lr-sm padding-tb-xl margin-lr bg-white"
      style="border-radius: 10px"
    >
      <view class="padding-sm" v-for="(item, index) in routerList" :key="index">
        <navigator
          :url="item.path"
          hover-class="none"
          :open-type="item.type"
          :class="[
            'padding-lr padding-tb-lg radius text-center q-shadow',
            'bg-gradual-' + item.color,
          ]"
        >
          <view class="text-xl text-white flex justify-center align-center">
            <text :class="'cuIcon-' + item.icon"></text>
            <text class="padding-left-sm text-df">{{ item.title }}</text>
          </view>
        </navigator>
      </view>
    </view>
  </scroll-view>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      name: 'home',
      swiperList: [
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2486364639,1222604304&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2042664459,3958317752&fm=26&gp=0.jpg',
      ],
      routerList: [
        {
          title: '预约体检',
          color: 'red',
          type: 'switchTab',
          icon: 'cardboardfill',
          path: '/pages/appointment/appointment',
        },
        {
          title: '我的预约',
          color: 'orange',
          type: 'navigate',
          icon: 'newsfill',
          path: '/pages/mine/order/order',
        },
        {
          title: '查看报告',
          type: 'switchTab',
          color: 'green',
          icon: 'formfill',
          path: '/pages/report/report',
        },
        {
          title: '中心介绍',
          color: 'blue',
          type: 'navigate',
          icon: 'newshotfill',
          path: '/pages/mine/introduce/introduce',
        },
        {
          title: '体检须知',
          color: 'purple',
          type: 'navigate',
          icon: 'activityfill',
          path: '/pages/mine/notice/notice',
        },
        {
          title: '联系我们',
          color: 'pink',
          type: 'navigate',
          icon: 'servicefill',
          path: '/pages/mine/concat/concat',
        },
      ],
    };
  },
};
</script>

<style>
.swiper {
  height: 400rpx;
  margin-bottom: 80rpx;
}
.q-shadow {
  box-shadow: 4px 4px 10px #adadad;
}
</style>
