export default {
	setCookie(n,v,e){
		var exdate=new Date();
		exdate.setDate(exdate.getDate() + e);
		var v=escape(v) + ((e==null) ? "" : "; expires="+exdate.toUTCString());
		document.cookie=n + "=" + v;
	},
	getCookie(n){
		var i,x,y,ARRcookies=document.cookie.split(";");
		for (i=0;i<ARRcookies.length;i++){
			x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
			y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
			x=x.replace(/^\s+|\s+$/g,"");

		}
		if (x==n){
			return unescape(y);
		}else{
			return null;
		}
	},
	initSeo( lang ){
//		return {
			console.log(lang.seo[lang]);
//		}
	}
}