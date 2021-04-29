<template>
  <div id="detail">
    <nav-bar>
      <div slot="left" class="detail-back" @click="backClick">
        <img src="@/assets/img/home/back.svg" alt="">
      </div>
      <div slot="center" class="detail-title">
        <div 
          :titles="titles" 
          v-for="(item, index) in titles" 
          :key="item" 
          class="detail-item" 
          :class="{active: currentIndex == index}"
          @click="titleClick(index)"
        >
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'Detail',
  data() {
    return {
      titles: ['商品', '评价', '详情', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
#detail {
  background-color: #fff;
  border-bottom: 1px solid #eee;
}

.detail-title {
  display: flex;
}

.detail-item {
  flex: 1;
  font-size: 14px;
}

.detail-back img {
  display: block;
  margin: 12px 0 0 16px;
}

.active {
  color: #f66348;
}
</style>