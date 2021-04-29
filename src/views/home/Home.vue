<template>
  <div id="home">
    <nav-bar class="nav-home">
      <div slot="center">首页</div>
    </nav-bar>
    <switch-tab :titles="['流行', '推荐', '最新']" class="switch-tab1" v-show="showTabs" @tabClick="tabClick" ref="bbb"></switch-tab>
    <div class="banner">
      <img src="@/assets/img/home/Banner.png" alt="" @load="imgLoad">
    </div>
    <switch-tab :titles="['流行', '推荐', '最新']" class="switch-tab2" ref="aaa" @tabClick="tabClick"></switch-tab>
    <button @click="btnClick">详情</button>
    <button @click="toastClick">toast</button>
    <toast ref="dd" message= "哈哈哈"/>
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
      <li>列表38</li>
      <li>列表39</li>
      <li>列表40</li>
      <li>列表41</li>
      <li>列表42</li>
      <li>列表43</li>
      <li>列表44</li>
      <li>列表45</li>
      <li>列表46</li>
      <li>列表47</li>
      <li>列表48</li>
      <li>列表49</li>
      <li>列表50</li>
      <li>列表51</li>
      <li>列表52</li>
      <li>列表53</li>
      <li>列表54</li>
      <li>列表55</li>
      <li>列表56</li>
      <li>列表57</li>
      <li>列表58</li>
      <li>列表59</li>
      <li>列表60</li>
      <li>列表61</li>
      <li>列表62</li>
      <li>列表63</li>
      <li>列表64</li>
      <li>列表65</li>
      <li>列表66</li>
      <li>列表67</li>
      <li>列表68</li>
      <li>列表69</li>
      <li>列表70</li>
      <li>列表71</li>
      <li>列表72</li>
      <li>列表73</li>
      <li>列表74</li>
      <li>列表75</li>
      <li>列表76</li>
      <li>列表77</li>
      <li>列表78</li>
      <li>列表79</li>
      <li>列表80</li>
      <li>列表81</li>
      <li>列表82</li>
      <li>列表83</li>
      <li>列表84</li>
      <li>列表85</li>
      <li>列表86</li>
      <li>列表87</li>
      <li>列表88</li>
      <li>列表89</li>
      <li>列表90</li>
      <li>列表91</li>
      <li>列表92</li>
      <li>列表93</li>
      <li>列表94</li>
      <li>列表95</li>
      <li>列表96</li>
      <li>列表97</li>
      <li>列表98</li>
      <li>列表99</li>
      <li>列表100</li>
    </ul> 
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import SwitchTab from '@/components/content/switchtab/SwitchTab'
  import Toast from '@/components/content/toast/Toast'


  // import {getHomeMultidata} from '@/network/home'

  export default {
    name: 'Home',
    data() {
      return {
        titles: ['流行', '推荐', '最新'],
        tabOffset: 0,
        showTabs: false,
        saveY: 0,
        currentY: 0
      }  
    },
    components: {
      NavBar,
      SwitchTab,
      Toast
    },
    mounted() {
      window.addEventListener('scroll',this.handleScroll)
    },
    created() {
      console.log('cteared');
    },
    destroyed() {
      console.log('des');
    },
    activated() {
      document.documentElement.scrollTop = this.saveY
    },
    deactivated() {
      console.log(document.documentElement.scrollTop);
      this.saveY = this.currentY
    },
    methods: {
      imgLoad() {
        this.tabOffset = this.$refs.aaa.$el.offsetTop
      },
      handleScroll() {
        // console.log(document.documentElement.scrollTop);
        this.currentY = document.documentElement.scrollTop
        this.showTabs = document.documentElement.scrollTop > this.tabOffset - 44
      },
      btnClick() {
        this.$router.push('/detail')
      },
      tabClick(index) {
        this.$refs.aaa.currentIndex = index
        this.$refs.bbb.currentIndex = index
      },
      toastClick() {
        this.$toast.show('我是你爹')
        // console.log(show);
      } 
    }
    // data() {

    // },
    // created() {
    //   //请求数据
    //   getHomeMultidata().then(res => {

    //   })
    // }

  }
</script>

<style scoped>
  .nav-home {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: #f66348;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
  }

  .banner {
    margin-top: 44px;
  }

  .banner img {
    width: 100%;
    vertical-align: middle;
  }

  /* .switch-tab {
    position: sticky;
    top: 40px
  } */

  .switch-tab1 {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  }
</style>
