import angular from 'angular';
import 'reset-css';
import style from './style.scss';

angular.module('mainApp', []).controller('mainCtrl', ($scope) => {
	// List of team members
	$scope.itemList = [
		{
			section: 'calendar',
			permission: {
				view: false,
				edit: false,
				remove: false
			}
		},
		{
			section: 'profile',
			permission: {
				view: false,
				edit: false,
				remove: false
			}
		},
		{
			section: 'property',
			permission: {
				view: false,
				edit: false,
				remove: false
			}
		},
		{
			section: 'contacts',
			permission: {
				view: false,
				edit: false,
				remove: false
			}
		}
	];
	
	$scope.checkAll = (columnName) => {	
		$scope.itemList.forEach((item) => {			
			item.permission.view = !$scope.checkViewAll;			
		});
	}
	
	$scope.save = () => {
		if (typeof(Storage) == 'undefined') {
			alert("No Web Storage support");
			return;
		}		
		localStorage.setItem('test', JSON.stringify($scope.itemList));
		alert("Saved");
	}
});