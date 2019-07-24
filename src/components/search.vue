<template>
	<section class="sub_cont container">
		<h2 class="tit_sub_cont">SEARCH</h2>

		<div class="search_wrap">
			<div class="inp_search">
				<input type="text" class="text text_large" v-model="keyword" />
				<a href="#" class="btn_search" v-on:click="searchMovie('keyword')"></a>
			</div>
		</div>

		<h2 class="tit_sub_cont">ADVANCED SEARCH</h2>
		<div class="search_advanced_wrap">
			<ul class="list_chk">
				<li v-for="(value,key,index) in genreType">
					<input :id="'chk_0'+(index+1)" type="checkbox" name="chk_search" v-bind:value="key" v-model="genre" />
					<label :for="'chk_0'+(index+1)">{{value}}</label>
				</li>
			</ul>

			<div class="search_lang">
				<label>
					Audio
					<select class="sel_small sel_lightgray">
						<option value="">All Language</option>
					</select>
				</label>
				<label>
					Subtitle
					<select class="sel_small sel_lightgray">
						<option value="">All Language</option>
					</select>
				</label>
			</div>
		</div>

		<div class="btn_wrap">
			<button class="button ok large" v-on:click="searchMovie('advanced')">Done</button>
		</div>
	</section>	
</template>

<script>
	
	export default {
		data: function(){
			return {
				genreType: this.$parent.global.genre[this.$parent.global.lang],
				keyword : "",
				genre: []
				
			}
		},
		methods:{
			searchMovie: function(searchType){
				if(searchType === "keyword"){
					this.$router.push({ path: "/searchresult", query:{"keyword":this.keyword, "genre":[]}});
				}else if(searchType === "advanced"){
					console.log(this.genre);
					this.$router.push({ path: "/searchresult", query:{"keyword":[], "genre":this.genre}});	
				}
			}
		}
	}

</script>