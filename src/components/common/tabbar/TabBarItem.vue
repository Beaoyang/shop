<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props:{
      link: String,
      activeColor: {
        type: String,
        default: '#f66348'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.includes(this.link)
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {} 
    }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.link)
      }
    }
  
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 10px;
    color: #666;
  }

  .tab-bar-item img {
    width: 27px;
    height: 27px;
    margin: 2px 0;
    vertical-align: middle;
}
</style>
