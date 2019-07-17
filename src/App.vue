<template>
	<div id="app">
		<commonHeader 
			v-bind:propsdata="global" 
			v-on:memberLogin="memberLogin"
			v-on:memberLogOut="memberLogOut"
			v-on:langChange="langChange">
		</commonHeader>
		<router-view></router-view>
		<commonFooter v-bind:propsdata="global"></commonFooter>
	</div>
</template>

<script type="text/javascript">
	
	/* 공통 모듈 */
	import commonHeader from "./components/common/header.vue"
	import commonFooter from "./components/common/footer.vue"

	/* 엑시오스 모듈 */
	import axiosModule from "../axios/aixosModule.js"

	/* TEAM 미켈란젤로 모듈 */
	import mrgelo from "../lib/mrgelo.core.js"

	/* 사용자별 언어팩 초기화 */
	import * as lang from "../language/lang.js"

	export default {
		created(){ 
			/* LifeCycle step 1 */

			/* 로그인 확인 */
			this._data.global.isLogin = this.isLoginCheck();
			this._data.global.lang = mrgelo.getCookie("useLanguage") ? mrgelo.getCookie("useLanguage").toString() : "en";
		},
		mounted(){ 
			/* LifeCycle step 2 */

		},
		beforeUpdate(){ 
			/* Dynamic step  */

			/* 로그인 확인 */
			this._data.global.isLogin = this.isLoginCheck("update");

		},
		data(){
			return {
				global : {
					"lang"     : lang.pack,
					"language" : lang.res,
					"isLogin"  : false,
					"memberData" : {}
				}
			}
		},
		components : {
			"commonHeader" : commonHeader,
			"commonFooter" : commonFooter
		},
		methods : {
			memberLogin(){
				let vue = this;
				let method = "user_login_email";
				axiosModule.getData(method,null).then(function(res){
					if(res.data.r){
						vue._data.global.memberData = res.data.d;
						vue._data.global.isLogin = true;
						mrgelo.setCookie("memberData",JSON.stringify(res.data.d));
						console.log(vue);
					}else{
						vue._data.global.memberData = {};
						vue._data.global.isLogin = false;
					}
				});
			},
			memberLogOut(){
				this._data.global.memberData = {};
				this._data.global.isLogin = false;
				mrgelo.setCookie("memberData","",0);
			},
			isLoginCheck(action){
				if(action){
					console.log(this._data.global.isLogin);
				}
				if(mrgelo.getCookie("memberData") == null ){
					this._data.global.isLogin = false;
					return false;
				}else{
					this._data.global.memberData = JSON.parse(mrgelo.getCookie("memberData"));
					this._data.global.isLogin = true;
					return true;
				}	
			},
			langChange( lang ){
				mrgelo.setCookie("useLanguage",lang);
				this._data.global.lang = lang;
			}
		}
	}

</script>