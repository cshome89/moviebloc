<template>
	<div class="account_wrap" :class="[ bgType != null ? 'bg_'+bgType : 'bg_01' ]">
	    <a @click="hidePopup" class="logo"><img src="images/logo.png" alt="MovieBolc"></a>
	    <div class="account">
	        <h2 class="tit_account">{{this.$parent.global.language[this.$parent.global.lang].signin_login}}</h2>
	        <div class="form_wrap">
	            <div class="f_group">
	                <span class="f_tit">{{this.$parent.global.language[this.$parent.global.lang].co_email}}</span>
	                <div class="inp_wrap" ref="inp_wrap1">
	                    <input type="text" ref="id" @keyup="keyPress('id')" placeholder="stranger@moviebloc.com" />
	                </div>
	            </div>
	            <div class="f_group">
	                <span class="f_tit">{{this.$parent.global.language[this.$parent.global.lang].co_pw}}</span>
	                <div class="inp_wrap" ref="inp_wrap2">
	                    <input type="password" ref="password"  @keyup="keyPress('password')" value="" />
	                </div>
	                <p class="txt_error" ref="error">{{this.$parent.global.language[this.$parent.global.lang].signin_enter}}</p>
	            </div>
	            <div class="f_group">
	                <button class="button full ok" ref="button" @click.self="memberLogin">{{this.$parent.global.language[this.$parent.global.lang].signin_login}}</button>
	            </div>
	            <div class="f_group">
	                <a @click="changePopup('findPassword')" class="forgot">{{this.$parent.global.language[this.$parent.global.lang].signin_forgot_pw}}</a>
	            </div>
	            <p class="txt_signup">
	            	{{this.$parent.global.language[this.$parent.global.lang].signin_not_mem}}
	            	<a @click="changePopup('join')">{{this.$parent.global.language[this.$parent.global.lang].signin_signup}}</a>
	            </p>
	        </div>
	    </div>
	</div>
</template>

<script>

	export default {
	  name: "loginModal",
	  created(){
		  this.bgType = "0"+(Math.floor(Math.random() * (3 + 1) + 0) + 1).toString();
		  if(this.$parent.global.isLogin){
			this.hidePopup();
		  }
	  },
	  mounted(){
		  this.$refs.id.focus();
	  },
	  props: {
	    isVisible: {
	      type: Boolean,
	      require: true,
	      default: false
	    },
	    title: {
	      type: String,
	      require: false,
	    },
	  },
	  data(){
		  return {
			  bgType : null
		  }
	  },
	  methods : {
		  memberLogin(){
			
			if(!this.$refs.id.value){
			  this.$refs.id.focus();
			  return false;
			}
			
			if(!this.$refs.password.value){
			  this.$refs.password.focus();
			  return false;
			}
			
			if( this.passwordError || this.idError ){
				this.$refs.inp_wrap1.classList.add("error");
				this.$refs.inp_wrap2.classList.add("error");
				return false;
			}
			
			let vue = this;
			let method = "user_login_email";
			this.$parent.$axiosModule.getData(method,{
				  mm_email :  vue.$refs.id.value,
				  mm_pwd   :  vue.$refs.password.value
			}).then(function(res){
				if(res.data.r === 1){
					vue.$parent.global.memberData = res.data.d;
					vue.$parent.global.isLogin = true;
					vue.$mrgelo.setCookie("memberData",JSON.stringify(res.data.d));
					vue.$parent.global.isVisible = false;
				}else{
					if(res.data.r === 1001){ // 이메일 미인증
					
					}else if(res.data.r === 2){ // 언어미설정
						
					}else if(res.data.r === 1003){ // 비밀번호 오류
						
					}else if(res.data.r === 1004){ // 미등록 이메일
						
					}
					
					vue.$refs.id.parentNode.classList.add("error");
					vue.$refs.password.parentNode.classList.add("error");
					
				}
			});
	
		  },
		  changePopup( page ){
			  this.$parent.global.isPopupName = page;
			  console.log(this.$parent.global);
		  },
		  hidePopup(){
			 this.$parent.global.isVisible = false;
		  },
		  keyPress( refId ){
			 switch( refId ){
			 	case "id" :
			 		var regexr = /^([a-z]|[A-Z]).{0,20}\@([a-z]|[A-Z]).{0,20}\.([a-z]|[A-Z]).{0,10}/g;
					 if( this.$refs[refId].value.match(regexr) ){
						 this.$refs.button.classList.add("ok");
						 this.$refs.inp_wrap1.classList.remove("error");
						 this.idError = false;
					 }else{
						 this.idError = true;
						 this.errorMsg = "test";
						 this.$refs.button.classList.remove("ok");
					 }
			 		break;
			 	case "password" :
			 		var regexr = /([a-z]|[A-Z]){0,8}/g;
					 if( this.$refs[refId].value.match(regexr) && this.$refs[refId].value.length >= 8){
						 this.$refs.button.classList.add("ok");
						 this.$refs.inp_wrap2.classList.remove("error");
						 this.passwordError = false;
					 }else{
						 this.passwordError = true;
						 this.errorMsg = "test";
						 this.$refs.button.classList.remove("ok");
					 }
			 		break;
			 }
			 
		  }
	  },
	}
</script>

