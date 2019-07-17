import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

import mainPage from "../src/components/main.vue"
import genrePage from "../src/components/genre.vue"
import searchPage from "../src/components/search.vue"

export const router = new VueRouter({
	mode : "history",
	routes : [
		{
			path : "/",
			component : mainPage
		},
		{
			path : "/genre",
			component : genrePage
		},
		{
			path : "/search",
			component : searchPage
		}
	]
});