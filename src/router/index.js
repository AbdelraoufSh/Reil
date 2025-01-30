import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Blog from '../views/BlogView.vue'
import Contact from '../views/ContactView.vue'
import About from '../views/AboutView.vue'
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'hash', 
 routes : [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta :{index:'1'}
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta :{index:'3'},
    component:About
  }
  ,
  {
    path:'/Blog',
    name:'Blog',
    component:Blog,
    meta :{index:'2'}
  },
  {
    path:'/Contact',
    name:'Contact',
    component:Contact,
    meta :{index:'4'}
  },
  {
    path: '*',
    redirect: '/'
  }
]

})
