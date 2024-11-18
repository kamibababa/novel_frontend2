import { createWebHashHistory, createRouter } from 'vue-router'


const routes = [
  { 
    path: '/', 
    name: 'book',
    component: () => import('@/views/book.vue') 
  },
  { 
    path: '/chapter/:bid', 
    name: 'chapter',
    component: () => import('@/views/chapter.vue') 
  },
  { 
    path: '/content/:cid',
    name: 'content', 
    component: () => import('@/views/content.vue') 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})



export default router