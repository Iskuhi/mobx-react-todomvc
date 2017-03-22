import 'todomvc-common';
import TodoStore from './stores/TodoStore';
import ViewStore from './stores/ViewStore';
import TodoApp from './components/Hours.js';
import React from 'react';
import ReactDOM from 'react-dom';


import HourModel from './models/HourModel';

const initialState = window.initialState && JSON.parse(window.initialState) || {};

var todoStore = TodoStore.fromJS(initialState.todos || []);
var viewStore = new ViewStore();

todoStore.subscribeServerToStore();

var role = {
	ID: "58c8eb2200000496f72493fc76929cff",
	name: "Product Manager",
	objCode: "ROLE",


	nodes: [{
		ID: "58c8eb28000004b5d2624e33d01c76d1",
		name: "Vazgen Babayan",
		objCode: "USER",

		nodes: [{
			ID: "58c8e9d6000001f63332070da815e7ea",
			name: "Write requirments",
			objCode: "TASK1",
			hour: {planned: 9, budgeted: 14, actual: 10},

			nodes: []
		},
			{
				ID: "58c8e9d6000001f63332070da815e7ea",
				name: "Read requirments",
				objCode: "TASK2",
				hour: {planned: 9, budgeted: 20, actual: 10},


				nodes: []
			}]
	}, {
		ID: "58c8eb28000004b5d2624e33d01c76d1",
		name: "Ann Babayan",
		objCode: "USER",

		nodes: [{
			ID: "58c8e9d6000001f63332070da815e7ea",
			name: "Write requirments",
			objCode: "TASK1",
			hour: {planned: 9, budgeted: 20, actual: 10},

			nodes: []
		},
			{
				ID: "58c8e9d6000001f63332070da815e7ea",
				name: "Read requirments",
				objCode: "TASK2",
				hour: {planned: 9, budgeted: 35, actual: 10},


				nodes: []
			}]
	}]
};

var user1 = role.nodes[0];
var user2 = role.nodes[1];

var userObject1 = new HourModel(user1.nodes);
var userObject2 = new HourModel(user2.nodes);


var userNodes = role.nodes.map(node => new HourModel(node.nodes));



console.log('userNodes', userNodes);
var roleObject = new HourModel([...userObject1.nodes, ...userObject2.nodes]);

console.log('userObject', userObject1.budgetedHour);
console.log('userObject2', userObject2.budgetedHour);
console.log('roleObject', roleObject.budgetedHour);

roleObject.budgetedHour = 150;

console.log('newHour', roleObject.budgetedHour);
console.log('task', userObject2.nodes[0].hour.budgeted);
console.log('task', userObject2.nodes[1].hour.budgeted);




var requestedData =  [{
		ID: "58c8e9ba000001b6e66a0dbb46c9d11a",
		name: "Project Spring",
		priority: 1,
		objCode: "PROJ",
		hours: [{actual: 5}, {actual: 6},{actual: 7},{actual: 10}],
		nodes: [{
			ID: "58c8eb2200000496f72493fc76929cff",
			name: "Product Manager",
			objCode: "ROLE",
			nodes: [{
				ID: "58c8eb28000004b5d2624e33d01c76d1",
				name: "Vazgen Babayan",
				objCode: "USER",
				hours: [{available: 9}, {available: 9}, {available: 9}, {available: 9}],
				nodes: [ {
					ID: "58c8e9d6000001f63332070da815e7ea",
					name: "Write requirments",
					objCode: "TASK",
					hour: {planned: 9, budgeted: 5, actual: 10},
					nodes: []
				}]
			}]
		}]
	}, {
		ID: "58c8e9ba000001b6e66a0dbb46c9d11a2",
		name: "Project Spring",
		priority: 1,
		objCode: "PROJ",
		hours: [{actual: 5}, {actual: 6},{actual: 7},{actual: 10}],
		nodes: [{
			ID: "58c8eb2200000496f72493fc76929cff",
			name: "Product Manager",
			objCode: "ROLE",
			nodes: [{
				ID: "58c8eb28000004b5d2624e33d01c76d1",
				name: "Vazgen Babayan",
				objCode: "USER",
				hours: [{available: 9}, {available: 9}, {available: 9}, {available: 9}],
				nodes: [ {
					ID: "58c8e9d6000001f63332070da815e7ea",
					name: "Write requirments",
					objCode: "TASK",
					hour: {planned: 9, budgeted: 5, actual: 10},
					nodes: []
				}]
			}]
		}]
	}, {
		ID: "58c8e9ba000001b6e66a0dbb46c9d11a3",
		name: "Project Spring",
		priority: 1,
		objCode: "PROJ",
		hours: [{actual: 5}, {actual: 6},{actual: 7},{actual: 10}],
		nodes: [{
			ID: "58c8eb2200000496f72493fc76929cff",
			name: "Product Manager",
			objCode: "ROLE",
			nodes: [{
				ID: "58c8eb28000004b5d2624e33d01c76d1",
				name: "Vazgen Babayan",
				objCode: "USER",
				hours: [{available: 9}, {available: 9}, {available: 9}, {available: 9}],
				nodes: [ {
					ID: "58c8e9d6000001f63332070da815e7ea",
					name: "Write requirments",
					objCode: "TASK",
					hour: {planned: 9, budgeted: 5, actual: 10},
					nodes: []
				}]
			}]
		}]
	}];

var nodes = requestedData;

 function getHours(nodes, hours = []) {
	if (nodes.nodes.length > 0) {
		return nodes.map((node)=> {
				hours.push(node.hours && node.hours.length ? node.hours[0].budgeted : 0);
				this.getHours(node.nodes, hours);
			}
		);
	}
	else {
		return;
	}
 }

ReactDOM.render(
	<TodoApp todoStore={todoStore}/>,
	document.getElementById('todoapp')
);

if (module.hot) {
	module.hot.accept('./components/todoApp', () => {
		var NewTodoApp = require('./components/todoApp').default;
		ReactDOM.render(
			<NewTodoApp todoStore={todoStore} viewStore={viewStore}/>,
			document.getElementById('todoapp')
		);
	});
}

