/**
 * Application for Playing with AngularJS (yspa) site 
 */
var app = angular.module('app', ['ngAnimate', 'ui.bootstrap', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	// For any unmatched url, send to /home
	$urlRouterProvider.otherwise("/buttonEnable")
	$stateProvider.state('#', {
	}).state('buttonEnable', {
	    url : "/buttonEnable",
	    templateUrl : "button/buttonEnable/buttonEnable.html"
	})
})