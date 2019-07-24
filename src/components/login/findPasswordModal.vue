<template>
	<div class="account_wrap" :class="[ bgType != null ? 'bg_'+bgType : 'bg_01' ]">
	    <a @click="hidePopup" href="javascript:void(0);" class="logo"><img src="images/logo.png" alt="MovieBolc"></a>
		<div class="account">
		    <h2 class="tit_account kr">{{this.$parent.global.language[this.$parent.global.lang].findpw}}</h2>
		    <p class="txt_account" v-html="this.$parent.global.language[this.$parent.global.lang].findpw_script"></p>
		    <div class="form_wrap">
		        <div class="f_group">
		            <span class="f_tit">{{this.$parent.global.language[this.$parent.global.lang].signup_set_mleng}}<em>*</em></span>
		            <div ref="inp_wrap" class="inp_wrap">
		                <input type="text" ref="id" @keyup="keyPress('id')" placeholder="alien007@moviebloc.com">
		                <a href="#" class="ok"></a>
		                <a href="#" class="del"></a>
		            </div>
		            <p class="txt_error" ref="error">{{errorMsg}}</p>
		        </div>
		
		        <div class="f_group">
		            <button ref="button" class="button full" @click="findPasswordNext">{{this.$parent.global.language[this.$parent.global.lang].co_confirm}}</button>
		        </div>
		
		        <a href="#" class="question">{{this.$parent.global.language[this.$parent.global.lang].findpw_ask}}</a>
		    </div>
		</div>
	</div>
</template>

<script>

	export default {
	  name: "loginModal",
	  created(){
		  this.bgType = "0"+(Math.floor(Math.random() * (3 + 1) + 0) + 1).toString();
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
			  bgType : null,
			  errorMsg : ""
		  }
	  },
	  methods : {
		  findPasswordNext(){
			
			if(!this.$refs.id.value){
			  this.$refs.id.focus();
			  return false;
			}
			if(!this.$refs.id.value.match(/^([a-z]|[A-Z]).{0,20}\@([a-z]|[A-Z]).{0,20}\.([a-z]|[A-Z]).{0,10}/g)){
				this.error = true;
				this.$refs.inp_wrap.classList.add("error");
				this.errorMsg = this.$parent.global.language[this.$parent.global.lang].findpw_noformat;
				this.$refs.id.focus();
				return false;
			}
			
			let vue = this;
			let method = "user_pwd_find";
			this.$parent.$axiosModule.getData(method,{
				  mm_email :  vue.$refs.id.value
			}).then(function(res){
				if(res.data.r === 1){
					vue.$parent.global.isPopupName = "findPasswordSuccess";
					vue.$parent.$EventBus.email = vue.$refs.id.value; 
				}else{
					if(res.data.r === "1000"){
						// 가입된 이메일이 아님
						vue.error = true;
						vue.$refs.inp_wrap.classList.add("error");
						vue.errorMsg = vue.$parent.global.language[vue.$parent.global.lang].findpw_nomem;
						vue.$refs.id.focus();
					}
				}
			});
	
		  },
		  hidePopup(){
			 this.$parent.global.isVisible = false;
		  },
		  keyPress( refId ){
			 var regexr = /^([a-z]|[A-Z]).{0,20}\@([a-z]|[A-Z]).{0,20}\.([a-z]|[A-Z]).{0,10}/g;
			 if( this.$refs[refId].value.match(regexr) ){
				 this.$refs.button.classList.add("ok");
			 }else{
				 this.$refs.button.classList.remove("ok");
				 /* this.error = true;
				 this.errorMsg = this.$parent.global.language[this.$parent.global.lang].; */
			 }
		  }
	  },
	}
</script>

