<template>
	<section class="sub_cont">
        <div class="search_wrap">
            <div class="inp_search">
                <input type="text" class="text text_large" :value="keyword"/>
                <a href="#" class="btn_search" v-on:click="searchMovie('keyword')"></a>
            </div>
        </div>
        <div class="search_result">
            <div class="tab_wrap">
                <div class="container">
                    <ul class="tab">
                        <li :class="{ active : classActive('movie') }" ><a href="#" v-on:click="tabChange('movie')">Movie (13)</a></li>
                        <li :class="{ active : classActive('theater') }" ><a href="#" v-on:click="tabChange('theater')">Theater (7)</a></li>
                        <li :class="{ active : classActive('people') }" ><a href="#" v-on:click="tabChange('people')">People (15)</a></li>
                    </ul>
                </div>
            </div>
            <div class="container">
            	<template v-if="tabName == 'movie'">
            		<div class="search_filter">
	                    <label>
	                        Sort
	                        <select class="sel_small sel_lightgray">
	                            <option value="">Popular</option>
	                        </select>
	                    </label>
	                    <label>
	                        {{this.$parent.global.language[this.$parent.global.lang].co_genre}}
							<select class="sel_small sel_lightgray" v-on:change="changeCategory" v-model="genre">
								<option value="all" :selected="genre != false? 'selected' : ''">{{this.$parent.global.language[this.$parent.global.lang].genre_all}}</option>
								<option v-for="(value,key) in genreType" v-bind:value="key" :selected="{ true : genre === key}">{{value}}</option>
							</select>
	                    </label>
	                    <label>
	                        Audio
	                        <select class="sel_small sel_lightgray">
	                            <option value="">All Audio</option>
	                        </select>
	                    </label>
	                    <label>
	                        Subtitles
	                        <select class="sel_small sel_lightgray">
	                            <option value="">All Subtitles</option>
	                        </select>
	                    </label>
	                </div>

	                <div class="list_search_video">
	                	<template v-if="movieRes.total != null">
	                    	<ul class="list_video c4">
	                        	<li v-for="items in movieRes">
	                            	<a href="#" class="img img_video">
	                                	<img v-bind:src="items.thumb" alt="" />
	                                	<p class="txt_name">{{items.explain[1][head]}}</p>
	                            	</a>
	                        	</li>
	                    	</ul>
	                    </template>
	                	<template v-if="movieRes.total == null">
	                		<div class="list_search_video">
                        		<p class="txt_empty">
                            		{{empty_message}}
                        		</p>
                    		</div>
	                	</template>
	                </div>
            	</template>
            	<template v-if="tabName == 'theater'">
            		<div class="search_filter">
                        <label>
                            Sort
                            <select class="sel_small sel_lightgray">
                                <option value="">Popular</option>
                            </select>
                        </label>
                    </div>

                    <div class="list_search_video">
						<!--<template v-if="theaterRes.total != null">-->
						<!--<ul class="list_video c2">-->
						<!--    <li v-for="items in theaterRes">-->
						<!--        <div class="figure_wrap big">-->
						<!--            <a href="#" class="img img_video"><img src="images/img_swiper_560_240_01.jpg" alt=""></a>-->
						<!--            <a href="#" class="img img_photo"><img src="images/img_video_photo.png" alt=""></a>-->
						<!--            <div class="txt_inner">-->
						<!--                <p class="txt_short">Lorem ipsum</p>-->
						<!--                <p class="txt_long">Lorem ipsum dolor sit amet</p>-->
						<!--            </div>-->
						<!--        </div>-->
						<!--    </li>-->
						<!--</ul>-->
						<!--<template v-if="theaterRes == null">-->
							<div class="list_search_video">
								<p class="txt_empty">
						    		{{empty_message}}
								</p>
							</div>
						<!--</template>-->
                    </div>
            	</template>
            	<template v-if="tabName == 'people'">
            		<div class="search_filter">
                        <label>
                            Sort
                            <select class="sel_small sel_lightgray">
                                <option value="">Popular</option>
                            </select>
                        </label>
                    </div>

                    <div class="list_search_video">
                    	<template v-if="peopleRes.total != null">
                        <ul class="list_video c4">
                            <li v-for="items in peopleRes">
                                <div class="figure_wrap people">
                                    <a href="#" class="img img_video"><img v-bind:src="items.thumb" alt=""></a>
                                    <p class="txt_name">{{items.movieuser}}</p>
                                </div>
                            </li>
                        </ul>
                        </template>
                        <template v-if="peopleRes.total == null">
	                		<div class="list_search_video">
                        		<p class="txt_empty">
                            		{{empty_message}}
                        		</p>
                    		</div>
	                	</template>
                    </div>
            	</template>
	        </div>
        </div>
    </section>
</template>
<script>
	export default{
		created(){
			var vue = this;
			this.$parent.$axiosModule.getSearchData("video",{
				"request":"video",
				"keyword":vue.keyword,
				"genre":vue.check, 
				"audio_lang":"ko",
				"caption":"ko",
				"order":"hit",
				"page":0,
				"count":10
			}).then(function(res){
				console.log(res);
				vue.movieRes = res.data;
				console.log(res.data);
			});
			
			this.$parent.$axiosModule.getSearchData("member",{
				"request":"member",
				"keyword":vue.keyword,
				"order":"new",
				"page":0,
				"count":10
			}).then(function(res){
				console.log(res);
				vue.peopleRes = res.data;
				console.log(res.data);
			});
			console.log(this.genre);
		},
		data: function() {
			return {
				tabName : "movie",
				keyword : this.$route.query.keyword,
				genre: this.$route.query.genre,
				genreType: this.$parent.global.genre[this.$parent.global.lang],
				movieRes : {},
				theaterRes : {},
				peopleRes : {}
			}
		},
		computed:{
			empty_message:function(){
				var data = this.$parent.global.language[this.$parent.global.lang].search_null.toString().replace(/{keyword}/g,this.keyword);
				
				return data;
			}
		},
		methods: {
			tabChange : function ( name ){
				this.tabName = name;
			},
			classActive : function ( name ){
				if(name == this.tabName){
					return true;
				}else{
					return false;
				}
			},
			searchMovie: function(searchType){
				if(searchType === "keyword"){
					this.$router.push({ path: "/searchresult", query:{"keyword":this.keyword, "genre":[]}});
				}else if(searchType === "advanced"){
					console.log(this.genre);
					this.$router.push({ path: "/searchresult", query:{"keyword":[], "genre":this.genre}});	
				}
			},
			changeCategory: function(e){
				var category = this._data.genre;
				if(category == "all"){
					this.$router.push("/genre");
				}else{
					this.$router.push({ path: "/genreDetail", query:{category:category}});
				}
			}
		}
	}
</script>