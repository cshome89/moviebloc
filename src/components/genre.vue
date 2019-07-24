<template>
	<section class="sub_cont">
		<h1 class="tit_sub_cont">
			{{this.$parent.global.language[this.$parent.global.lang].gnb_genre}}
			<select class="sel_lightgray sel_small"v-on:change="changeCategory" v-model="category">
				<option value="all">All</option>
				<option v-for="(value,key) in genreType" v-bind:value="key">{{value}}</option>
			</select>
		</h1>
		<section class="video_scroll_wrap">
			<section class="genre_video" v-for="(items,key,index) in genreRes">
				<div class="swp_video swp_small" :class="'swp_0'+(index+1)">
					<p class="txt_type">{{genreType[key]}}</p>
					<div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide figure_wrap" v-for="item in items">
								
								<a href="#" class="img img_video"><img v-bind:src="item.cin" alt=""></a>
								<p class="txt_name">{{item.chd}}</p>
							</div>
						</div>
					</div>
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
			</section>
		</section>
	</section>
</template>

<script>
	export default {
		created(){
			let vue = this;
			this.$parent.$axiosModule.getData("get_genre_all",{
				"sm_lang"	: this.$parent.global.lang,
				"ss_lang"	: this.$parent.global.lang,
				"sd_lang"	: this.$parent.global.lang,
				"mx_cnt"	: 10
			}).then(function(res){
				var resData = Object.values(res.data.d);
				var resKeys = Object.keys(res.data.d);
				vue._data.genreRes = res.data.d;
				
			});
		},
		data(){
			return{
				genreRes:{},
				genreType: this.$parent.global.genre[this.$parent.global.lang],
				category: "all"
			}
		},
		methods : {
			changeCategory: function(e){
				var category = this._data.category;
				if(category != "all"){
					this.$router.push({ path: "/genreDetail", query:{"category":category}});	
				}
			}
		},
		mounted(){
			var swp_01 = new Swiper ('.swp_01 .swiper-container', {
				slidesPerView:'auto',
				nextButton: '.swp_main_01 .swiper-button-next',
				prevButton: '.swp_main_01 .swiper-button-prev',
			})
			var swp_02 = new Swiper ('.swp_02 .swiper-container', {
			    slidesPerView:'auto',
			    nextButton: '.swp_02 .swiper-button-next',
			    prevButton: '.swp_02 .swiper-button-prev',
			})
			var swp_03 = new Swiper ('.swp_03 .swiper-container', {
			    slidesPerView:'auto',
			    nextButton: '.swp_03 .swiper-button-next',
			    prevButton: '.swp_03 .swiper-button-prev',
			})
			var swp_04 = new Swiper ('.swp_04 .swiper-container', {
			    slidesPerView:'auto',
			    nextButton: '.swp_04 .swiper-button-next',
			    prevButton: '.swp_04 .swiper-button-prev',
			})
			var swp_05 = new Swiper ('.swp_05 .swiper-container', {
			    slidesPerView:'auto',
			    nextButton: '.swp_05 .swiper-button-next',
			    prevButton: '.swp_05 .swiper-button-prev',
			})
			var swp_06 = new Swiper ('.swp_06 .swiper-container', {
			    slidesPerView:'auto',
			    nextButton: '.swp_06 .swiper-button-next',
			    prevButton: '.swp_06 .swiper-button-prev',
			})
			
		}
	}
</script>