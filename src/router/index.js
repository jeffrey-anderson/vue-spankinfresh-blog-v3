import { createRouter, createWebHistory } from 'vue-router';
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
  {
    path: '/article/:id',
    name: 'articles',
    props: parseProps,
    component: () => import(/* webpackChunkName: "core" */ '../views/Articles.vue'),
  },
  {
    path: '/edit/article/:id',
    name: 'edit-article',
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

export default router;
