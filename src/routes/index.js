/**
 * Route index file for Vue Router
 */
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/components/Views/Home.vue";
import ViewOne from "@/components/Views/ViewOne.vue";
import ViewTwo from "@/components/Views/ViewTwo.vue";
import CommentsView from "@/components/Views/CommentsView.vue";

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/routeone',
		name: 'routeone',
		component: ViewOne
	},
	{
		path: '/routetwo',
		name: 'routetwo',
		component: ViewTwo
	},
	{
		path: '/comments',
		name: 'comments',
		component: CommentsView
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;