const axios = require("axios")

export default {
	path : {
		common : "http://182.162.161.92/api/v0/",
		search : "http://182.162.161.99:8080/search/"
	},
	getData( method , params ){
		method = this.path.common + method;
		return axios.get(method,params);
	},
	getSearchData( method , params ){
		method = this.path.search + method;
		return axios.get(method,params);
	}
}
