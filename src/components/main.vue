<template>
	<div>
		<section class="main_top_banner" v-bind:style="{'background-image':'url('+ mainRes.mtImg[0] +')'}">
            <div class="video_info">
                <h2 class="txt_name">{{mainRes.mt.chd}}</h2>
                <p class="txt_info"> {{mainRes.mt.nim}} / {{this.$parent.global.genre[this.$parent.global.lang][mainRes.mt.gne]}} / {{mainRes.mt.ptm}} / <img src="images/svg/icon_star_a.svg" alt="★">{{mainRes.mt.gag}}% </p>
                <p class="txt_desc">{{mainRes.mt.cbd}}</p>
                <div class="btn_bar">
                    <a href="#" class="btn btn_video btn_small btn_play">$0.8</a>
                    <a href="#" class="btn btn_video btn_small btn_watch_add">{{this.$parent.global.language[this.$parent.global.lang].co_watchlater}}</a>
                    <a href="#" class="btn btn_video btn_small btn_detail" v-on:click="linkClick('detail')">{{this.$parent.global.language[this.$parent.global.lang].co_detail}}</a>
                </div>
            </div>
        </section>
		<section class="main_video">
            <div class="swp_video swp_small swp_main_01">
                <p class="txt_type">New Arrival Movie with English Subtitle</p>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide figure_wrap" v-for="item in mainRes.cp">
                            <a href="#" class="img img_video"><img v-bind:src="item.cin" alt=""></a>
                            <p class="txt_name">{{item.chd}}</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </section>

        <section class="main_video">
            <div class="swp_video swp_big swp_main_02">
                <p class="txt_type">Featured Theater</p>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_560_240_01.jpg" alt=""></a>
                            <a href="#" class="img img_photo"><img src="images/img_video_photo.png" alt=""></a>
                            <div class="txt_inner">
                                <p class="txt_short">Lorem ipsum</p>
                                <p class="txt_long">Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_560_240_01.jpg" alt=""></a>
                            <a href="#" class="img img_photo"><img src="images/img_video_photo.png" alt=""></a>
                            <div class="txt_inner">
                                <p class="txt_short">Lorem ipsum</p>
                                <p class="txt_long">Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_560_240_01.jpg" alt=""></a>
                            <a href="#" class="img img_photo"><img src="images/img_video_photo.png" alt=""></a>
                            <div class="txt_inner">
                                <p class="txt_short">Lorem ipsum</p>
                                <p class="txt_long">Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_560_240_01.jpg" alt=""></a>
                            <a href="#" class="img img_photo"><img src="images/img_video_photo.png" alt=""></a>
                            <div class="txt_inner">
                                <p class="txt_short">Lorem ipsum</p>
                                <p class="txt_long">Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </section>

        <section class="in_house_banner">
            <a href="#"><img src="images/img_in_house_banner.jpg" alt="in-house banner"></a>
        </section>

        <section class="main_video">
            <div class="swp_video swp_small swp_main_03">
                <p class="txt_type">MovieBloc Collection</p>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide figure_wrap" v-for="item in mainRes.rc">
                            <a href="#" class="img img_video"><img v-bind:src="item.cin" alt=""></a>
                            <p class="txt_name">{{item.chd}}</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </section>

        <section class="main_video">
            <div class="swp_video swp_small swp_main_04">
                <p class="txt_type">You may also like this</p>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide figure_wrap" v-for="item in mainRes.pr">
                            <a href="#" class="img img_video"><img v-bind:src="item.cin" alt=""></a>
                            <p class="txt_name">{{item.chd}}</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </section>

        <section class="main_ad">
            <a href="#"><img src="images/img_ad_970_90.jpg" alt="ad"></a>
        </section>

        <section class="main_video">
            <div class="swp_video people swp_main_05">
                <p class="txt_type">Curator Rank</p>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_01.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_01.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_01.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_01.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_01.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_01.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_01.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_01.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_01.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_01.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_01.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </section>

        <section class="main_video">
            <div class="swp_video people swp_main_06">
                <p class="txt_type">Curator Rank</p>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_02.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_02.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_02.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_02.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_02.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_02.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_02.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_02.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_02.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_02.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                        <div class="swiper-slide figure_wrap">
                            <a href="#" class="img img_video"><img src="images/img_swiper_150_150_02.png" alt=""></a>
                            <p class="txt_name">Charis Elvira</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </section>
	</div>
</template>

<script>
	export default{
		created(){
			let vue = this;
			this.$parent.$axiosModule.getData("get_main_list",{
					"sm_lang"	: this.$parent.global.lang,
					"ss_lang"	: this.$parent.global.lang,
					"sd_lang"	: this.$parent.global.lang,
					"mx_cnt"	: 10
				}).then(function(res){
				vue._data.mainRes.mt = res.data.d.mt;
				vue._data.mainRes.cp = res.data.d.cp;
				vue._data.mainRes.rc = res.data.d.rc;
				vue._data.mainRes.pr = res.data.d.pr;
				for(var i=0;i<res.data.d.mt.cin.length;i++){
					var j = i + 1;
					vue._data.mainRes.mtImg[i] = res.data.d.mt.cin[i][j];
				}
				
			});
		},
		mounted(){
            var swp_main_01 = new Swiper ('.swp_main_01 .swiper-container', {
                slidesPerView:'auto',
                nextButton: '.swp_main_01 .swiper-button-next',
                prevButton: '.swp_main_01 .swiper-button-prev',
            });
            var swp_main_02 = new Swiper ('.swp_main_02 .swiper-container', {
                slidesPerView:'auto',
                nextButton: '.swp_main_02 .swiper-button-next',
                prevButton: '.swp_main_02 .swiper-button-prev',
            });
            var swp_main_03 = new Swiper ('.swp_main_03 .swiper-container', {
                slidesPerView:'auto',
                nextButton: '.swp_main_03 .swiper-button-next',
                prevButton: '.swp_main_03 .swiper-button-prev',
            });
            var swp_main_04 = new Swiper ('.swp_main_04 .swiper-container', {
                slidesPerView:'auto',
                nextButton: '.swp_main_04 .swiper-button-next',
                prevButton: '.swp_main_04 .swiper-button-prev',
            });
            var swp_main_05 = new Swiper ('.swp_main_05 .swiper-container', {
                slidesPerView:'auto',
                nextButton: '.swp_main_05 .swiper-button-next',
                prevButton: '.swp_main_05 .swiper-button-prev',
            });
            var swp_main_06 = new Swiper ('.swp_main_06 .swiper-container', {
                slidesPerView:'auto',
                freeMode: true,
                nextButton: '.swp_main_06 .swiper-button-next',
                prevButton: '.swp_main_06 .swiper-button-prev',
            });
		},
		data(){
			return {
				mainRes:{
					mt: {},
					cp: {},
					rc: {},
					pr: {},
					mtImg: {}
				}
			}
		},
		methods: {
			linkClick: function(link){
				if(link == "detail"){
					this.$router.push({ path: "/detail?no="+this._data.mainRes.mt.cid});
				}
			}
		}
	}

</script>