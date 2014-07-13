$( document ).ready(function() {
	setCustomersAndProjectsList();
});

function setCustomersAndProjectsList(){
    getCustomerIds( function (customerIds) {
		for(customerIdIndex = 0; customerIdIndex < customerIds.length) {
			getProjectsOfCustomer( customerIds[customerIdIndex] , function(projects) {
					
			});
		}
	});
}


function getCustomerIds(callback){
	$.getJSON( '/customers', callback);
}

}


