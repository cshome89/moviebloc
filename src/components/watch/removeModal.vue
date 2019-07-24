<template>
	<div class="pop_wrap">
       <div class="pop_mask"></div>
       <template v-if="complete">
			<div class="pop_cont">
				<h2 class="tit_pop tit_kr txt_left">{{this.lang.refund_done}}</h2>
				<div class="form_wrap">
					<p class="txt_pop">{{this.lang.refund_done_script}}</p>
			    	<a href="#" class="btn btn_text btn_small btn_black btn_chk">{{this.lang.refund_done_check}}</a>
				    <div class="f_group">
				        <div class="btn_right">
				            <button class="button ok" @click="close">{{this.lang.co_confirm}}</button>
				        </div>
				    </div>
				 </div>
			</div>
       </template>
       <template v-else>
	       <div class="pop_cont">
	           <h2 class="tit_pop tit_kr txt_left">{{this.lang.refund}}</h2>
	           <div class="form_wrap">
	               <p class="txt_pop" v-html="this.lang.refund_script"></p>
	               <div class="f_group">
	                   <div class="btn_right">
	                       <button class="button cancel black" @click="close">{{this.lang.co_no}}</button>
	                       <button class="button ok" @click="nextRemove">{{this.lang.co_yes}}</button>
	                   </div>
	               </div>
	           </div>
	       </div>
       </template>
   </div>
</template>

<script>

	export default {
		props : {
			cid : {
				type : String,
				require : true
			}
		},
		data(){
			return {
				complete : false
			}
		},
		created(){
			this.lang = this.$parent.$parent.global.language[this.$parent.$parent.global.lang];
		},
		methods : {
			close(){
				this.$parent.showRemoveItemModal = false;
			},
			nextRemove(){
				var vue = this;
    			var method = "set_buy_ref";
    			var params = {
    				mm_uuid : "",
    				ct_uuid : "",
    				pm_uuid : "",
    				re_amt	: ""
    			};
            	this.$parent.$axiosModule.getData(method,params).then(res =>{
            		if( res.data.r === 1 ){
            			vue.complete = true;
            		}
            	});    				
			}
		}
	}

</script>