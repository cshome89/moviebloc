<template>
	<div class="account_wrap" :class="[ bgType != null ? 'bg_'+bgType : 'bg_01' ]">
	    <a @click="hidePopup" class="logo"><img src="images/logo.png" alt="MovieBolc"></a>
		<div class="account">
		    <h2 class="tit_account kr">{{this.$parent.global.language[this.$parent.global.lang].mail_certi_check}}</h2>
		    <div class="email_wrap">
		        <div class="img_wrap">
		            <img src="images/svg/icon_big_email.svg" alt="Email">
		        </div>
		        <p class="txt_account" v-html="getMessage(1)"></p>
		        <p class="txt_account02" v-html="getMessage(2)"></p>
		    </div>
		</div>
	</div>
</template>

<script>

	export default {
	    name: "joinCompleteModal",
	    created() {
	        this.bgType = "0" + (Math.floor(Math.random() * (3 + 1) + 0) + 1).toString();
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
	            bgType: null
	        }
	    },
	    methods: {
	    	getMessage( paramNumber ){
	    		let nickname = this.$parent.$EventBus.nickname;
	    		let id = this.$parent.$EventBus.email;
	    		let text = null;
	    		switch(paramNumber){
	    			case 1 :
	    				text = this.$parent.global.language[this.$parent.global.lang].mail_certi_script;
	    				text = text.toString().replace(/{Nickname}/gi,nickname);
	    				text = text.toString().replace(/{email}/gi,id);
	    				break;
	    			case 2 :
	    				text = this.$parent.global.language[this.$parent.global.lang].mail_certi_spam+"<br/>";
	    				text += this.$parent.global.language[this.$parent.global.lang].mail_certi_link;
	    				break;
	    		}
	    		return text;
	    	},
	    	hidePopup(){
	    		this.$parent.global.isVisible = false;
	    	}
	    }
	}

</script>

