/**
 * Controller for enabling/disabling
 */

app.controller("ButtonEnableController", function($scope) {
	$scope.buttonEnable = {
	    inputButtonStatus : "enabled",
	    inputButtonValue : "Disable",
	    rawButtonStatus : "enabled",
	    rawButtonValue : "Disable"
	}

	$scope.changeInputState = function() {
		data = $scope.buttonEnable; 
		if (data.inputButtonStatus == "enabled") {
			data.inputButtonStatus = "disabled";
			data.inputButtonValue = "Enable"
		} else {
			data.inputButtonStatus = "enabled";
			data.inputButtonValue = "Disable"
		}
	}

	$scope.changeRawState = function() {
		data = $scope.buttonEnable; 
		if (data.rawButtonStatus == "enabled") {
			data.rawButtonStatus = "disabled";
			data.rawButtonValue = "Enable"
		} else {
			data.rawButtonStatus = "enabled";
			data.rawButtonValue = "Disable"
		}
	}

	$scope.buttonWasClicked = function(buttonName) {
		alert(buttonName + " was clicked.")
	}
})