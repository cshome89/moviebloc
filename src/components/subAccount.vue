<template>
	<div class="wrap">
        <div class="account_wrap bg_01">
            <a href="#" class="logo"><img src="images/logo.png" alt="MovieBolc"></a>
            <div class="account">
                <h2 class="tit_account">Sign in</h2>
                <div class="form_wrap">
                    <div class="f_group">
                        <span class="f_tit">Email</span>
                        <div class="inp_wrap">
                            <input type="text" value="stranger@moviebloc.com"/>
                        </div>
                    </div>
                    <div class="f_group">
                        <span class="f_tit">Password</span>
                        <div class="inp_wrap error">
                            <input type="password" value="123456"/>
                        </div>
                        <p class="txt_error">Please check you had the right email and password.</p>
                    </div>
                    <div class="f_group">
                        <button class="button full ok">Sign in</button>
                    </div>
                    <div class="f_group">
                        <a href="#" class="forgot">Forgot your password?</a>
                    </div>
                    <p class="txt_signup">Not a member?<a href="#">Sign up now</a></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
	export default{
		
	}
</script>