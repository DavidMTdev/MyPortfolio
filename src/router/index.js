/* eslint-disable prettier/prettier */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: { title: 'Portfolio | David Teixeira' },
		component: () => import('../views/Home.vue')
	},
	{
		path: '/blog',
		name: 'Blog',
		meta: { title: 'Blog | David Teixeira'},
		component: () => import('../views/Blog.vue')
	},
	{
		path: '/blog/article/:id',
		name: 'Article',
		meta: { title: 'Article'},
		component: () => import('../views/Article.vue')
	},
	{
		path: '*',
		redirect: '/'
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	document.title = to.meta.title;
	next();
});

export default router;
