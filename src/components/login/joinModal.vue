<template>
	<div class="account_wrap" :class="[ bgType != null ? 'bg_'+bgType : 'bg_01' ]">
	    <a @click="hidePopup" class="logo"><img src="images/logo.png" alt="MovieBolc"></a>
	    <div class="account">
            <h2 class="tit_account">{{this.$parent.global.language[this.$parent.global.lang].signin_signup}}</h2>
            <div class="form_wrap">
                <div class="f_group">
                    <span class="f_tit">{{this.$parent.global.language[this.$parent.global.lang].co_email}}</span>
                    <div class="inp_wrap">
                        <input type="text" ref="id" @keyup="keyPress('id')" placeholder="stranger@moviebloc.com"/>
                        <a href="#" class="ok"></a>
                        <a href="#" class="del"></a>
                    </div>
                    <p class="txt_error" v-if="isActive['id']">{{this.$parent.global.language[this.$parent.global.lang].signup_alemail}}</p>
                </div>
                <div class="f_group">
                    <span class="f_tit">{{this.$parent.global.language[this.$parent.global.lang].co_pw}}</span>
                    <div class="inp_wrap">
                        <input type="password" ref="password" @keyup="keyPress('password')" value=""/>
                        <a href="#" class="ok"></a>
                        <a href="#" class="del"></a>
                    </div>
                </div>
                <div class="f_group">
                    <span class="f_tit">{{this.$parent.global.language[this.$parent.global.lang].co_pw_confirm}}</span>
                    <div class="inp_wrap">
                        <input type="password" ref="password2" @keyup="keyPress('password2')" value=""/>
                        <a href="#" class="ok"></a>
                        <a href="#" class="del"></a>
                    </div>
                    <p  class="txt_error">{{this.$parent.global.language[this.$parent.global.lang].signup_nomatpw}}</p>
                </div>
                <div class="f_group">
                    <span class="f_tit">{{this.$parent.global.language[this.$parent.global.lang].signup_nickname}}</span>
                    <div class="inp_wrap">
                        <input type="text" ref="nickname" @keyup="keyPress('nickname')" value=""/>
                        <a href="#" class="ok"></a>
                        <a href="#" class="del"></a>
                    </div>
                    <p class="txt_error">{{this.$parent.global.language[this.$parent.global.lang].signup_alnick}}</p>
                </div>
                <div class="f_group">
                    <a href="#" class="forgot">{{this.$parent.global.language[this.$parent.global.lang].signin_forgot_pw}}</a>
                </div>
                <div class="f_group">
                    <div class="chk_agree">
                        <input id="chk_agree" ref="agreement" type="checkbox" />
                        <label for="chk_agree">Agree with our <a href="#">terms</a> and <a href="#">privacy policy.</a></label>
                    </div>
                </div>
                <div class="f_group">
                    <div class="valid_wrap">
						<vue-recaptcha 
							ref="recaptcha" 
							sitekey="6LeW4a4UAAAAACUwLZ1WPsfPTsL4UIwEMwz_-cU1"
		                    @verify="onCaptchaVerified"
		                    @expired="onCaptchaExpired"
		                    >
		                </vue-recaptcha>
                    </div>
                </div>
                <div class="f_group">
                    <button class="button full" @click="memberJoin">{{this.$parent.global.language[this.$parent.global.lang].signin_signup}}</button>
                </div>
            </div>
        </div>
	</div>
</template>

<script>

	import VueRecaptcha from "vue-recaptcha"
	
	export default {
	    name: "joinModal",
	    created() {
	        this.bgType = "0" + (Math.floor(Math.random() * (3 + 1) + 0) + 1).toString();
	    },
	    mounted() {
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
	    data() {
	        return {
	            bgType: null,
	            isActive : []
	        }
	    },
	    components: {
	        "vue-recaptcha": VueRecaptcha
	    },
	    methods: {
	        memberJoin() {
				
// 	        	if( !this.$refs.button.classList.contains("ok") ){
// 	        		return false;
// 	        	}
	        	
	            if (!this.$refs.id.value) {
	                this.$refs.id.focus();
	                return false;
	            }
	
	            if (!this.$refs.password.value) {
	                this.$refs.password.focus();
	                return false;
	            }
	
	            if (!this.$refs.password2.value) {
	                this.$refs.password2.focus();
	                return false;
	            }
	
	            if (!this.$refs.nickname.value) {
	                this.$refs.nickname.focus();
	                return false;
	            }
	
// 	            if (!this.$refs.agreement.checked) {
// 	                this.$refs.agreement.focus();
// 	                return false;
// 	            }
	
	            let vue = this;
	            let method = "user_join_email";
	            this.$parent.$axiosModule.getData(method, {
	                mm_email: vue.$refs.id.value,
	                mm_pwd: vue.$refs.password.value,
	                ni_name: vue.$refs.nickname.value
	            }).then(function(res) {
	                if (res.data.r === 1) {
	                  	vue.$parent.global.isPopupName = "joinComplete";
	                  	vue.$parent.$EventBus.nickname = vue.$refs.nickname.value;
	                  	vue.$parent.$EventBus.email = vue.$refs.id.value;
	                } else {
	
	                }
	            });
	
	        },
	        hidePopup() {
	            this.$parent.global.isVisible = false;
	        },
	        keyPress(action) {
				
	        	let vue = this; 
	        	switch(action){
	        		case "id" :
	        			var regexr = /^([a-z]|[A-Z]).{0,20}\@([a-z]|[A-Z]).{0,20}\.([a-z]|[A-Z]).{0,10}/g;
	        			if( vue.$refs.id.value.match(regexr) ){
	        				vue.$refs.id.parentNode.classList.add("done");
	        				vue.isActive[action] = true;
	        			}else{
	        				vue.$refs.id.parentNode.classList.remove("done");
	        				vue.isActive[action] = false;
	        			}
	        			break;
	        		case "password" :
	        		case "password2" :
	        			var regexr = /([a-z]|[A-Z]|[0-9]).{8,20}/g;
	        			if( vue.$refs[action].value.match(regexr) ){
	        				vue.$refs[action].parentNode.classList.add("done");
	        				vue.isActive[action] = true;
	        			}else{
	        				vue.$refs[action].parentNode.classList.remove("done");
	        				vue.isActive[action] = false;
	        			}
	        			break;
	        		case "nickname" :
	        			var regexr = /(^(admin|administrator|moviebloc))/g;
	        			console.log(vue.$refs[action].value.match(regexr));
	        			if(vue.$refs[action].value.length > 4 && vue.$refs[action].value.length <= 20){
		        			if( !vue.$refs[action].value.match(regexr) ){
		        				vue.$refs[action].parentNode.classList.add("done");
		        				this.isActive[action] = true;
		        			}else{
		        				vue.$refs[action].parentNode.classList.remove("done");
		        			}
	        			}else{
	        				vue.$refs[action].parentNode.classList.remove("done");
	        				vue.isActive[action] = false;
	        			}
	        			
	        			console.log(vue.isActive);
	        			break;
	        	}
	        	
	        },
	        onCaptchaVerified: function(recaptchaToken) {
	            const self = this;
	        },
	        onCaptchaExpired: function() {
	            this.$refs.recaptcha.reset();
	        }
	    },
	}

</script>

