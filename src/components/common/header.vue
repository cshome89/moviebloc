<template>
	<header class="header">
		<router-link to="/" class="logo">MovieBloc</router-link>
		<div class="menu">
			<ul class="gnb">
				<li>
					<router-link to="/">{{propsdata.language[propsdata.lang].gnb_home}}</router-link>
				</li>
				<li>
					<a @click="memberLogin">{{propsdata.language[propsdata.lang].gnb_theater}}</a>
				</li>
				<li>
					<router-link to="/genre">{{propsdata.language[propsdata.lang].gnb_genre}}</router-link>
				</li>
				<li>
					<router-link to="/search">{{propsdata.language[propsdata.lang].gnb_search}}</router-link>
				</li>
			</ul>
			<template v-if="propsdata.isLogin">
				<div class="account">
                    <div class="alarm_wrap">
                        <a href="#" class="alarm new"></a>
                        <div class="dropdown_alarm">
                            <ul class="list_alarm">
                                <li><a href="#">John Doe님이 내 리뷰를 좋아합니다.</a></li>
                                <li><a href="#">John Doe님이 내 리뷰를 좋아합니다.</a></li>
                                <li><a href="#">환영합니다! 무비블록의 회원이 되셨습니다.</a></li>
                            </ul>
                            <select class="sel_black sel_small">
                                <option value="">{{propsdata.language[propsdata.lang].dot_tab_act}}</option>
                            </select>
                        </div>
                    </div>
                    <nav class="my">
                        <a href="#" class="img img_photo">
                            <img src="images/img_photo.png" alt="" />
                            <span class="txt_nick_name">NicknameHereHere1234...</span>
                        </a>
                        <ul class="dropdown_my">
                            <li>
                            	<a href="#">{{propsdata.language[propsdata.lang].gnb_dotbloc}}</a>
                            </li>
                            <li>
                            	<a href="#">{{propsdata.language[propsdata.lang].gnb_watchlater}}</a>
                            </li>
                            <li>
                            	<a href="#">{{propsdata.language[propsdata.lang].gnb_history}}</a>
                            </li>
                            <li>
                            	<a href="#">{{propsdata.language[propsdata.lang].gnb_purchases}}</a>
                            </li>
                            <li>
                            	<a href="javascript:void(0);" @click="memberLogOut">{{propsdata.language[propsdata.lang].gnb_signout}}</a>
                            </li>
                        </ul>
                    </nav>
                </div>
			</template>
			<template v-else>
				<div class="account">
                    <div class="alarm_wrap">
                        <a href="#" class="alarm"></a>
                    </div>
                    <nav class="my">
                        <a href="#" class="sign">
                        	{{propsdata.language[propsdata.lang].gnb_signin}}/{{propsdata.language[propsdata.lang].gnb_signup}}
                        </a>
                    </nav>
                </div>
			</template>
			<select class="lang sel_small sel_lightgray" v-on:change="langChange">
				<option value="en" :selected="propsdata.lang == 'en'">영어</option>
				<option value="ko" :selected="propsdata.lang == 'ko'">한국어</option>
			</select>
		</div>
		<a href="#" class="btn_menu">Menu</a>
	</header>
</template>

<script>

	export default {
		created(){
			console.log(this.$route);
		},
		props : ["propsdata"],
		methods : {
			langChange(e){
				var idx = e.target.options.selectedIndex;
				this._props.propsdata.lang = e.target.options[idx].value;
				this.$emit("langChange",this._props.propsdata.lang);
			},
			memberLogin(){
				this.$emit("memberLogin");
			},
			memberLogOut(){
				this.$emit("memberLogOut");
			}
		}
	}

</script>

<style type="text/css">
	
	.gnb li .router-link-exact-active{
		color:#8f67ff;
	}

	.gnb li .router-link-exact-active:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 5px;
    width: 100%;
    height: 1px;
    background: #8f67ff;
}

</style>