<template v-if="isAuth">
	<div class="account_wrap" :class="[ bgType != null ? 'bg_'+bgType : 'bg_01' ]">
	    <a href="/" class="logo"><img src="images/logo.png" alt="MovieBolc"></a>
		<div class="account">
            <h2 class="tit_account kr">{{lang.signup_set_certi}}</h2>
            <p class="txt_account" v-html="lang.signup_set_script"></p>
            <div class="form_wrap">
                <div class="f_group">
                    <span class="f_tit">{{lang.signup_set_mleng}}<em>*</em></span>
                    <select class="sel_large sel_black max">
                        <option value="">한국어</option>
                    </select>
                </div>
                <div class="f_group">
                    <span class="f_tit">{{lang.signup_set_sleng}}<em>*</em></span>
                    <select class="sel_large sel_black max">
                        <option value="">English</option>
                    </select>
                </div>
                <div class="f_group">
                    <span class="f_tit">{{lang.signup_set_recom}}</span>
                    <div class="inp_wrap" ref="inp_wrap">
                        <input type="text" ref="recom" placeholder="alien007@moviebloc.com">
                        <a href="#" class="ok"></a>
                        <a href="#" class="del"></a>
                    </div>
                    <p class="txt_error" ref="error">{{errorMsg}}</p>
                </div>
                <div class="f_group">
                    <button class="button full ok" @click="nextAccess">{{lang.co_confirm}}</button>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
	
	export default {
		
	    name: "joinAccessStep",
	    created() {
	    	this.$parent.global.isVisible = true;
	        this.bgType = "0" + (Math.floor(Math.random() * (3 + 1) + 0) + 1).toString();
	        this.lang = this.$parent.global.language[this.$parent.global.lang];
	        /* 임시 처리 */
	        this.isAuth = this.$route.query.authCode==undefined ? false : true;
	        if(!this.isAuth){
	        	this.$parent.global.isVisible = false;	
	        	this.$router.push({ path: "/" });	
	        }else{
	        	this.$parent.global.isVisible = false;
	        	this.$parent.global.isCommon = false;
	        }
	    },
		data(){
			return {
				isAuth : false,
				error : false,
				errorMsg : ""
			}
		},
		methods : {
	    	hidePopup(){
	    		this.$parent.global.isVisible = false;
	    	},
	    	nextAccess(){
	    		
	    		if(this.$refs.recom.value){
	    			if(true){
	    				this.error = true;
	    				this.$refs.inp_wrap.classList.add("error");
	    				this.errorMsg = this.lang.signup_set_nomem;
	    			}
	    		}
	    		
	    	}
		}
		
		
	}
	
</script>
