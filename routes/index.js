import Vue from "vue"
import VueRouter from "vue-router"
import VueMeta from "vue-meta"

Vue.use(VueRouter);
Vue.use(VueMeta);

import mainPage from "../src/components/main.vue"

import genrePage from "../src/components/genre.vue"
import searchPage from "../src/components/search.vue"
import genreDetailPage from "../src/components/genreDetail.vue"
import detailPage from "../src/components/detail.vue"
import settingPage from "../src/components/setting.vue"
import moviePage from "../src/components/movie.vue"
import movieUploadPage from "../src/components/movieUpload.vue"
import subAccountPage from "../src/components/subAccount.vue"
import searchResultPage from "../src/components/searchResult.vue"

/* 진창언 */
import walletPage from "../src/components/wallet.vue"
import watchlistPage from "../src/components/watchlist.vue"

import joinAccessPage from "../src/components/login/joinAccessStep.vue"

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
		},
		{
			path : "/genredetail",
			component : genreDetailPage
		},
		{
			path : "/searchresult",
			component : searchResultPage
		},
		{
			path : "/detail",
			component : detailPage
		},
		{
			path : "/setting",
			component : settingPage
		},
		{
			path : "/movie",
			component : moviePage
		},
		{
			path : "/movieUpload",
			component : movieUploadPage
		},
		{
			path : "/wallet",
			component : walletPage
		},
		{
			path : "/watchlist",
			component : watchlistPage,
			props : true
		},
		{
			path : "/subAccount",
			component : subAccountPage
		},
		{
			path : "/access",
			component : joinAccessPage
		}
	]
});