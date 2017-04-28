angular.module("agenda").service("businessAPI", function($http) {
	this.getBusinesses = function(){
		return $http.get("http://localhost:8090/business");
	};
	this.getBusiness = function(businessId){
		return $http.get("http://localhost:8090/business/" + businessId);
	};
	this.saveBusiness = function(business){
		return $http.post("http://localhost:8090/business", business);
	};
	this.deleteBusiness = function(businessId){
		return $http.delete("http://localhost:8090/business/" + businessId);
	};
});