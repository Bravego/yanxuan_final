import Msite from '../pages/Msite/Msite.vue'
import Category from '../pages/Category/Category.vue'
import Cart from '../pages/Cart/Cart.vue'
import Topic from '../pages/Topic/Topic.vue'
import Profile from '../pages/Profile/Profile.vue'

//二级路由
import CategoryDetail from '../pages/CategoryDetail/CategoryDetail.vue'


export default [
  {
    path:'/',
    redirect: '/msite'
  },
  {
    path:'/msite',
    component: Msite
  },
  {
    path:'/category',
    component: Category,
    children:[
      {
        path:'/category/',
        redirect: '/category/cateDetail/1022001'
      },
      {
        path:'/category/cateDetail/:id',
        component: CategoryDetail
      }
    ]
  },
  {
    path:'/cart',
    component: Cart
  },
  {
    path:'/topic',
    component: Topic
  },
  {
    path:'/profile',
    component: Profile
  },
]
