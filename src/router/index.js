import { createRouter, createWebHistory } from 'vue-router';
import { navigationGuard, LoginCallback } from '@okta/okta-vue';
import HomeView from '@/views/HomeView.vue';
import TableOfContents from '@/components/TableOfContents.vue';
import PageNotFound from '@/views/PageNotFound.vue';

const parseProps = (r) => ({ id: parseInt(r.params.id, 10) });

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  { path: '/login/callback', component: LoginCallback },
  {
    path: '/article/:id',
    name: 'articles',
    props: parseProps,
    component: () => import(/* webpackChunkName: "core" */ '../views/Articles.vue'),
  },
  {
    path: '/edit/article/:id',
    name: 'edit-article',
    meta: {
      requiresAuth: true,
    },
    props: parseProps,
    component: () => import(/* webpackChunkName: "core" */ '../views/EditArticle.vue'),
  },
  {
    path: '/articles',
    name: 'toc',
    props: { displayAll: true },
    component: TableOfContents,
  },
  {
    path: '/category/:categoryName',
    name: 'category',
    props: true,
    component: () => import(/* webpackChunkName: "core" */ '../views/Category.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Due to navigation guards mixin issue in vue-router-next, navigation guard logic need to be added manually
router.beforeEach(navigationGuard);

export default router;
