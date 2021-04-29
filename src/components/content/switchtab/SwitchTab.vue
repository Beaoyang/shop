<template>
  <div class="switch-tab">
    <div
      v-for="(item, index) in titles"
      class="switch-tab-item"
      :class="{ active: index == currentIndex }"
      @click="tabClick(index)"
      :key="index"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwitchTab",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
};
</script>

<style scoped>
.switch-tab {
  display: flex;
  font-size: 15px;
  color: #333;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}

.switch-tab-item {
  flex: 1;
  text-align: center;
}

.active {
  color: #f66348;
  font-size: 18px;
  font-weight: 700;
}

.active span {
  padding: 5px;
  border-bottom: 2px solid #f66348;
}
</style>