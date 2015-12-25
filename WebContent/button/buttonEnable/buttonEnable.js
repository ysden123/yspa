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
		if ($scope.buttonEnable.inputButtonStatus == "enabled") {
			$scope.buttonEnable.inputButtonStatus = "disabled";
			$scope.buttonEnable.inputButtonValue = "Enable"
		} else {
			$scope.buttonEnable.inputButtonStatus = "enabled";
			$scope.buttonEnable.inputButtonValue = "Disable"
		}
	}

	$scope.changeRawState = function() {
		if ($scope.buttonEnable.rawButtonStatus == "enabled") {
			$scope.buttonEnable.rawButtonStatus = "disabled";
			$scope.buttonEnable.rawButtonValue = "Enable"
		} else {
			$scope.buttonEnable.rawButtonStatus = "enabled";
			$scope.buttonEnable.rawButtonValue = "Disable"
		}
	}

	$scope.buttonWasClicked = function(buttonName) {
		alert(buttonName + " was clicked.")
	}
})