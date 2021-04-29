<template>
  <div class="toast" v-show="isShow">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '默认文字',
      isShow: false
    }
  },
  methods: {
    show(message, time=1000) {
      console.log('-------');
      this.isShow = true;
      this.message = message

      setTimeout(() => {
        this.isShow = false;
        this.message = ''
      }, time);
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    padding: 8px 20px;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    background-color: rgba(0, 0, 0, .8);

  }

  .toast span {
    
    color: #fff;
    font-size: 14px;
  }
</style>