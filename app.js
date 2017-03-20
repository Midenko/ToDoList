(function (angular) {
	'use strict';
	angular.module('ToDoListApp', [])
		.controller('ToDoListCntr', ToDoListCntr);

	function ToDoListCntr() {
		this.selected = [];
		this.tasks = [];
	};

	ToDoListCntr.prototype.addTask = function () {
		this.tasks.push({
			id: this.getCurrentId(),
			name: this.name,
			duedate: formatDate(this.duedate),
			description: this.description,
			completed: this.completed ? "Yes" : "No"
		});
	}

	ToDoListCntr.prototype.getCurrentId = function () {
		if (!this.tasks || this.tasks.length == 0) return 0;
		else return this.tasks[this.tasks.length - 1].id++;
	}

	function formatDate(date) {

		let dd = date.getDate();
		if (dd < 10) dd = '0' + dd;

		let mm = date.getMonth() + 1;
		if (mm < 10) mm = '0' + mm;

		let yy = date.getFullYear();

		return dd + '.' + mm + '.' + yy;
	}

})(window.angular);
