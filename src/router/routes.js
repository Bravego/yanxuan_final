import Msite from '../pages/Msite/Msite.vue'
import Category from '../pages/Category/Category.vue'
import Cart from '../pages/Cart/Cart.vue'
import Topic from '../pages/Topic/Topic.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

//二级路由
import CategoryDetail from '../pages/CategoryDetail/CategoryDetail.vue'


export default [
  {
    path:'/',
    redirect: '/msite'
  },
  {
    path:'/msite',
    component: Msite,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/category',
    component: Category,
    meta:{
      showFooter:true
    },
    children:[
      {
        path:'/',
        meta:{
          showFooter:true
        },
        redirect: '/category/cateDetail/1022001'
      },
      {
        path:'/category/cateDetail/:id',
        meta:{
          showFooter:true
        },
        component: CategoryDetail
      }
    ]
  },
  {
    path:'/cart',
    component: Cart,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/topic',
    component: Topic,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/profile',
    component: Profile
  },
  {
    name:'loginPage',
    path:'/login',
    component: Login
  }

]
