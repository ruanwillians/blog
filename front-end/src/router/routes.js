import Guard from 'src/middleware/AuthToken'

const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    beforeEnter: Guard.redirect,
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
      { path: 'post/:id', component: () => import('pages/PostInfo.vue') },
    ]
  },
  {
    path: '/create',
    beforeEnter: Guard.verifyAuth,
    component: () => import('layouts/FeedLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CreatePost.vue') },
    ]
  },
  {
    path: '/edit',
    beforeEnter: Guard.verifyAuth,
    component: () => import('layouts/FeedLayout.vue'),
    children: [
      { path: 'post/:id', component: () => import('pages/EditPost.vue') },
    ]
  },
  
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
