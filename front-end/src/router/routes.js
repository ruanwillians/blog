import Guard from 'src/middleware/AuthToken'


const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'register', component: () => import('pages/RegisterPage.vue') }
    ]
  },

  {
    path: '/feed',
    beforeEnter: Guard.verifyAuth,
    component: () => import('layouts/FeedLayout.vue'),
    children: [
      { path: '/:id', component: () => import('pages/FeedPage.vue') },
    ]
  },
  

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
