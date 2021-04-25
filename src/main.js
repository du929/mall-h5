import Vue from 'vue'
import md5 from 'js-md5'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Form, Field, Toast,Icon,Grid,GridItem,AddressList ,AddressEdit,Swipe, SwipeItem, SwipeCell } from 'vant'
import 'lib-flexible/flexible'

Vue.use(Form).use(Field).use(Toast).use(Button).use(Icon).use(Grid).use(GridItem).use(AddressList).use(AddressEdit).use(Swipe)
.use(SwipeCell).use(SwipeItem)
Vue.prototype.$md5 = md5
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
