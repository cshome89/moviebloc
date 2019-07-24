<template>
	<section class="sub_cont">
        <h1 class="tit_sub_cont">{{this.$parent.global.language[this.$parent.global.lang].gnb_watchlater}}</h1>
        <div class="tab_wrap">
            <div class="container">
                <ul class="tab">
                    <li :class="{ active : classActive('later') }"><a href="#" v-on:click="tabChange('later')">{{this.$parent.global.language[this.$parent.global.lang].gnb_watchlater}} ({{cnt.later}})</a></li>
                    <li :class="{ active : classActive('history') }"><a href="#" v-on:click="tabChange('history')">{{this.$parent.global.language[this.$parent.global.lang].gnb_history}} ({{cnt.history}})</a></li>
                    <li :class="{ active : classActive('purchases') }"><a href="#" v-on:click="tabChange('purchases')">{{this.$parent.global.language[this.$parent.global.lang].gnb_purchases}} ({{cnt.purchases}})</a></li>
                </ul>
            </div>
        </div>
        <div class="container">
            <template v-if="tabName == 'later'">
                <div class="list_video_wrap">
                    <ul class="list_video c2">
                        <li v-for="data in res">
                            <dl class="video_card">
                                <dt>
                                    <a href="#"><img v-bind:src="data.cin" alt=""></a>
                                </dt>
                                <dd>
                                    <a href="#" class="txt_name">{{data.chd}}</a>
                                    <p class="txt_desc">{{data.cbd}}</p>
                                    <a href="#" class="btn_del" @click="removeItem(data.cid , 'later' )"></a>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </div>
            </template>
            <template v-if="tabName == 'history'">
                <div class="list_video_wrap">
                    <ul class="list_video c2">
                        <li v-for="data in res">
                            <dl class="video_card">
                                <dt>
                                    <a href="#"><img v-bind:src="data.cin" alt=""></a>
                                </dt>
                                <dd>
                                    <a href="#" class="txt_name">{{data.chd}}</a>
                                    <p class="txt_star"><img src="images/svg/icon_star_a.svg" alt="�쁾">{{data.gde}}%</p>
                                    <a href="#" class="btn_del" @click="removeItem(data.cid , 'history' )"></a>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </div>
            </template>
            <template v-if="tabName == 'purchases'">
                <div class="list_video_wrap">
                    <ul class="list_video c2">
                        <li v-for="data in res">
                            <dl class="video_card">
                                <dt>
                                    <a href="#"><img v-bind:src="data.cin" alt=""></a>
                                </dt>
                                <dd>
                                    <a href="#" class="txt_name">{{data.chd}}</a>
                                    <p class="txt_star"><img src="images/svg/icon_star_a.svg" alt="별점수">{{data.gde}}%</p>
                                    <div class="txt_info">
<!--                                         <p>{{this.$parent.global.language[this.$parent.global.lang].pur_payment}}{{data.pdt}}</p> -->
<!--                                         <p>{{this.$parent.global.language[this.$parent.global.lang].pur_expiry}}{{data.edt}}</p> -->
                                        <a href="#" v-on:click="refundCheck(data.cid , 'purchases')">환불가능</a>
                                    </div>
                                    <a href="#" class="btn_del" @click="removeItem(data.cid , 'purchases')"></a>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </div>
            </template>
        </div>
        <modal v-if="showRemoveItemModal" :cid="removeCid"></modal>
    </section>
</template>

<script>

	import modal from "./watch/removeModal.vue"

	export default{
		data(){
			return {
				tabName : "later",
				visible: false,
				res : {
					lst : [],
					tot : 0
				},
				cnt : {
					later : 1,
					history : 0,
					purchases : 6
				},
				showRemoveItemModal : false,
				removeCid : 0
			}
        },
        components : {
        	"modal" : modal
        },
		created(){
			if(!this.$parent.global.isLogin){
				this.$parent.global.isVisible = true;
				this.$parent.global.isPopupName = "login";
			}else{
				var arr = new Array("purchases","history","later");
				for(var i=0; i < arr.length; i++){
					this.getData(arr[i]);
				}
				this.tabName = "later";
			}
		},
		beforeUpdated(){
			this.$parent.global.lang = "ko";
			console.log(this.lang.gnb_purchases);
// 			console.log(this.$parent.global.language[this.$parent.global.lang].gnb_purchases);
		},
        methods: {
            tabChange : function ( name ){
                this.tabName = name;
                this.res = this.getData(name);
            },
            classActive : function ( name ){
                if(name == this.tabName){
                    return true;
                }else{
                    return false;
                }
            },
            refundClick: function (){
                this.visible = !this.visible
            },
            getData( name ){
            	var vue = this;
            	let params = {
               		mm_uuid  : "",
               		pg_size  : "",
               		rq_page  : "",
               		ed_key   : "",
               		sm_lang  : "",
               		ss_lang  : "",
               		sd_lang  : ""
               	};
            	switch(name){
            		case "later" :
            			var method = "get_watch_list";
                    	this.$parent.$axiosModule.getData(method,params).then(res =>{
                    		vue.res = res.data.d.lst;
                    		vue.cnt[name] = res.data.d.tot;
                    	});        			
            			break;
            		case "history" :
            			var method = "get_history_list";
                    	this.$parent.$axiosModule.getData(method,params).then(function(res){
                    		vue.res = res.data.d.lst;
                    		vue.cnt[name] = res.data.d.tot;
                    	});  
            			break;
            		case "purchases" :
            			var method = "get_buy_list";
                    	this.$parent.$axiosModule.getData(method,params).then(function(res){
                    		vue.res = res.data.d.lst;
                    		vue.cnt[name] = res.data.d.tot;
                    	});  
            			break;
            	}
            },
            refundCheck( cid ){
            	this.showRemoveItemModal = true;
            	this.removeCid = cid;
            },
            removeItem( cid , type ){
    			var method = null;
    			var params = {};
    			switch(type){
    				case "later" :
    					method = "set_watch_del";
    					params.wt_uuid = ""; // 해당 찜 영화 ID
    					break;
    				case "history" :
    					method = "del_history_del";
    					params.wh_uuid = ""; // 해당 영화 ID
    					break;
    				case "purchases" :
    					method = "set_buy_del";
    					params.ct_uuid = ""; // 해당 영화 ID
    					params.pm_uuid = ""; // 결제 코드
    					break;
    			};
            	this.$parent.$axiosModule.getData(method,params).then(res =>{
            		console.log(res);
            	});    				
			}
        }
	}
</script>