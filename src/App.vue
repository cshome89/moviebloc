<template>
	<div id="app" ref="app">
		<template v-if="global.isVisible">
			<loginModal :isVisible="global.isVisible" v-if="global.isPopupName == 'login'"></loginModal>
			<joinModal :isVisible="global.isVisible" v-if="global.isPopupName == 'join'"></joinModal>
			<findPasswordModal :isVisible="global.isVisible" v-if="global.isPopupName == 'findPassword'"></findPasswordModal>
			<findPasswordSuccessModal :isVisible="global.isVisible" v-if="global.isPopupName == 'findPasswordSuccess'"></findPasswordSuccessModal>
			<joinCompleteModal :isVisible="global.isVisible" v-if="global.isPopupName == 'joinComplete'"></joinCompleteModal>
		</template>
		<template v-else>
			<commonHeader 
				v-on:memberLogOut="memberLogOut"
				v-on:langChange="langChange"
				v-on:showPopup="showPopup" v-if="global.isCommon">
			</commonHeader>
			<router-view></router-view>
			<commonFooter v-if="global.isCommon"></commonFooter>
		</template>
	</div>
</template>

<script type="text/javascript">
	
	/* 공통 컴포넌트 */
	import commonHeader from "./components/common/header.vue"
	import commonFooter from "./components/common/footer.vue"
	
	/* 로그인 팝업 컴포넌트 */
	import loginModal from "./components/login/loginModal.vue"
	import joinModal from "./components/login/joinModal.vue"
	import findPasswordModal from "./components/login/findPasswordModal.vue"
	import findPasswordSuccessModal from "./components/login/findPasswordSuccess.vue"
	import joinCompleteModal from "./components/login/joinCompleteModal.vue"

	/* 사용자별 언어팩  */
	import * as lang from "../language/lang.js"
	
	/* 장르 코드정의json */
	import * as genre from "../genre/genre.js"

	export default {
		created(){ 
			/* LifeCycle step 1 */

			/* 로그인 확인 */
			this.global.isLogin = this.isLoginCheck();
			this.global.lang = this.$mrgelo.getCookie("useLanguage") ? this.$mrgelo.getCookie("useLanguage").toString() : "en";
			
			/* 서버에 초기 설정 요청 */
			if(this.global.isLogin === false){
				this.userGetDefault();
			}
		},
		mounted(){ 
			/* LifeCycle step 2 */
			this.$refs.app.parentNode.classList.add(this.global.lang);
		},
		beforeUpdate(){ 
			/* Dynamic step  */

			/* 로그인 확인 */
			this.global.isLogin = this.isLoginCheck("update");
		},
		data(){
			return {
				global : {
					"lang"     : lang.pack,     // 유저 언어
					"language" : lang.res,      // 언어팩 패키지 
					"isLogin"  : false,        // 로그인 여부
					"memberData" : {},         // 멤버 객체
					"isVisible" : false,      // 초기 팝업여부
					"isPopupName" : null,
					"isCommon"   : true,       // 상/하단 초기 토글 여부
					"genre" : genre.res        // 장르 코드정의
				}
			}
		},
		components : {
			"commonHeader" : commonHeader,
			"commonFooter" : commonFooter,
			"loginModal"   : loginModal,
			"joinModal"    : joinModal,
			"findPasswordModal" : findPasswordModal,
			"findPasswordSuccessModal" : findPasswordSuccessModal,
			"joinCompleteModal" : joinCompleteModal
		},
		methods : {
			memberLogOut(){ // 멤버 로그아웃
				let vue = this;
				let method = "user_logout";
				this.$axiosModule.getData(method,{
					  mm_email :  "dummy",
					  ck_key   :  "dummy"
				}).then(function(res){
					if(res.data.r){
						vue.global.memberData = {};
						vue.global.isLogin = false;
						vue.$mrgelo.setCookie("memberData","",0);
					}else{
						alert("로그아웃 중 문제가 발생하였습니다.");
					}
				});
			},
			isLoginCheck(action){ // 로그인 체크
				if(action){
					return this.global.isLogin;
				}
				if(this.$mrgelo.getCookie("memberData") == null ){
					this.global.isLogin = false;
					return false;
				}else{
					this.global.memberData = JSON.parse(this.$mrgelo.getCookie("memberData"));
					this.global.isLogin = true;
					return true;
				}	
			},
			langChange( lang ){ // 언어 변경
				this.$mrgelo.setCookie("useLanguage",lang);
				this.global.lang = lang;
				this.$refs.app.parentNode.classList.remove();
				this.$refs.app.parentNode.classList.add(this.global.lang);
			},
			showPopup( type ){ // 팝업 노출 
				this.global.isVisible = true;
				this.global.isPopupName = type;
			},
			userGetDefault(){
				var method = "user_get_default";
				var params = {
					ui_lang : this.getUserLang()
				};
				this.$axiosModule.getData(method,params).then(function(res){
					console.log(res);
				});
			},
			getUserLang(){
				var lang = "";
				if(navigator.language){
					lang = navigator.language.split("-")[0].toString();
				}else if(navigator.userLanguage){
					lang = navigator.userLanguage.split("-")[0].toString();
				}
				console.log("초기 접속 사용자 브라우저 언어 :"+lang);
				return lang;
			}
		},
 		metaInfo(){
			return lang.seo[this.global.lang];
		}
	}

</script>