import Toast from './Toast'



const obj = {}

obj.install =function (vue) {
  // 1.创建组件构造器
  const toastConstrustor = vue.extend(Toast)

  //  2.new一个组件对象并挂载到新创建的div上
  const toast = new toastConstrustor().$mount(document.createElement('div'))

  // 3.toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  vue.prototype.$toast = toast
}

export default obj