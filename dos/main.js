import 'babel-polyfill'
import Vue from 'vue'
import App from './app'
import router from './router'
import kui from '../src/index'
import './assets/demo.less'

import preCode from "./components/high"

Vue.use(preCode)
Vue.use(kui)
// router.beforeEach(function (transition) {
//     console.log(transition)
// })
new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
    // store
})