<template>
	<section class="sub_cont">
            <div class="container">
                <h1 class="tit_sub_cont">
                    {{this.$parent.global.language[this.$parent.global.lang].gnb_genre}}
					<select class="sel_lightgray sel_small"v-on:change="changeCategory" v-model="category">
						<option value="all">All</option>
						<option v-for="(value,key) in genreType" v-bind:value="key">{{value}}</option>
					</select>
                </h1>

                <ul class="list_video c4">
                    <li v-for="item in genreRes">
                        <a href="#" class="img img_video">
                            <img v-bind:src="item.cin" alt="" />
                            <p class="txt_name">{{item.chd}}</p>
                        </a>
                    </li>
                </ul>
            </div>

        </section>
</template>
<script>
	export default{
		created(){
			var vue = this;
			this.$parent.$axiosModule.getData("get_genre_sel",{
				"gn_code" : vue.$route.query.category
			}).then(function(res){
				vue._data.genreRes = res.data.d.lst;
			});
			
		},
		data: function(){
        	return {
        		category : this.$route.query.category,
        		genreRes: {},
				genreType: this.$parent.global.genre[this.$parent.global.lang]
        	}
        },
		methods: {
			changeCategory: function(e){
				var category = this._data.category;
				if(category == "all"){
					this.$router.push("/genre");
				}else{
					this.$router.push({ path: "/genreDetail", query:{category:category}});
				}
			}
		}
	}
</script>