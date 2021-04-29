// module.exports = {
//   configurewebpack: {
//     resolve: {
//       alias: {
//         'assets': '@/assets',
//         'common': '@/common',
//         'components': '@/components',
//         'network': '@/network',
//         'views': '@/views'
//       }
//     }
//   }
// }

const path = require('path');//引入path模块
const resolve = dir => path.join(__dirname, dir)

module.exports={
    chainWebpack: config =>{
        config.resolve.alias
        .set('@',resolve('./src'))
        .set('components',resolve('@/components'))
        .set('assets',resolve('@/assets'))
        .set('commonjs',resolve('@/commonjs'))
        .set('network',resolve('@/network'))
        .set('views',resolve('@/views'))
        //set第一个参数：设置的别名，第二个参数：设置的路径
　　　　
    }
}