import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'home',
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      index: 1 //添加meta属性，约定1为第一级
    }
  },
  {
    path: '/category',
    name: 'category',
    //组件懒加载
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue'),
    meta: {
      index:1 //添加meta属性， 约定2 为第二级
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {
      index:1
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
    meta: {
      index:1
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue'),
    meta: {
      index:2
    }
  },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "detail" */ '../views/Login.vue'),
      meta: {
        index:2
      }
  },
  {
    path: '/address',
    name: 'address',
    component: () => import(/* webpackChunkName: "detail" */ '../views/Address.vue'),
    meta: {
      index:2
    }
  },
  {
      path: '/address-edit',
      name: 'address-edit',
      component: () => import(/* webpackChunkName: "detail" */ '../views/AddressEdit.vue'),
      meta: {
        index:2
      }
   }
]

const router = new VueRouter({
  routes,
})

export default router
