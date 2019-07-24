<template>
	<div class="account_wrap" :class="[ bgType != null ? 'bg_'+bgType : 'bg_01' ]">
	    <a @click="hidePopup" href="javascript:void(0);" class="logo"><img src="images/logo.png" alt="MovieBolc"></a>
		<div class="account">
            <h2 class="tit_account kr">{{this.$parent.global.language[this.$parent.global.lang].findpw_send}}</h2>
            <div class="email_wrap">
                <div class="img_wrap">
                    <img src="images/svg/icon_big_email.svg" alt="Email">
                </div>
                <div class="form_wrap">
                    <div class="f_group">
                        <p class="txt_account" v-html="emailContent()"></p>
                    </div>
                    <div class="f_group">
                        <button class="button full ok" @click="hidePopup">{{this.$parent.global.language[this.$parent.global.lang].findpw_send_home}}</button>
                    </div>
                    <a href="#" class="question">문의하기</a>
                </div>
            </div>
        </div>
	</div>
</template>

<script>

	export default {
		created(){
			this.bgType = "0"+(Math.floor(Math.random() * (3 + 1) + 0) + 1).toString();
			this.email = this.$parent.$EventBus.email;
		},
		methods : {
			hidePopup(){
				this.$parent.global.isVisible = false;
			},
			emailContent(){
				return this.$parent.global.language[this.$parent.global.lang].findpw_send_script.replace(/\{email}/g,this.email);
			}
		}
	}
</script>

