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

var userNodesResult = role.nodes.map(node => new HourModel(node.nodes))
	.reduce((acc, val) => [...acc, ...val.nodes], []);

var roleObject = new HourModel(userNodesResult);

console.log('roleObject', roleObject.budgetedHour);


var requestedData = [
	{
		ID: "58c8e9ba000001b6e66a0dbb46c9d11a",
		name: "Project Spring",
		priority: 1,
		objCode: "PROJ",
		hours: [{actual: 5}, {actual: 6}, {actual: 7}, {actual: 10}],
		nodes: [{
			ID: "58c8eb2200000496f72493fc76929cff",
			name: "Product Manager",
			objCode: "ROLE",
			nodes: [{
				ID: "58c8eb28000004b5d2624e33d01c76d1",
				name: "Vazgen Babayan",
				objCode: "USER",
				hours: [{available: 9}, {available: 9}, {available: 9}, {available: 9}],
				nodes: [{
					ID: "58c8e9d6000001f63332070da815e7ea",
					name: "Write requirments",
					objCode: "TASK",
					hour: {planned: 9, budgeted: 5, actual: 10},
					nodes: []
				}, {
					ID: "58c8e9d6000001f63332070da815e7ea",
					name: "read requirmentsdddd",
					objCode: "TASK",
					hour: {planned: 9, budgeted: 5, actual: 10},
					nodes: []
				}]
			}, {
				ID: "58c8eb28000004b5d2624e33d01c76d1",
				name: "Ani",
				objCode: "USER",
				hours: [{available: 9}, {available: 9}, {available: 9}, {available: 9}],
				nodes: [{
					ID: "58c8e9d6000001f63332070da815e7ea",
					name: "Write requirments",
					objCode: "TASK",
					hour: {planned: 9, budgeted: 5, actual: 10},
					nodes: []
				}, {
					ID: "58c8e9d6000001f63332070da815e7ea",
					name: "read requirmentsdddd",
					objCode: "TASK",
					hour: {planned: 9, budgeted: 5, actual: 10},
					nodes: []
				}]
			}]
		}]
	},
	{
		ID: "58c8e9ba000001b6e66a0dbb46c9d11a2",
		name: "Project Spring",
		priority: 1,
		objCode: "PROJ",
		hours: [{actual: 5}, {actual: 6}, {actual: 7}, {actual: 10}],
		nodes: [{
			ID: "58c8eb2200000496f72493fc76929cff",
			name: "Product Manager",
			objCode: "ROLE",
			nodes: [{
				ID: "58c8eb28000004b5d2624e33d01c76d1",
				name: "Vazgen Babayan",
				objCode: "USER",
				hours: [{available: 9}, {available: 9}, {available: 9}, {available: 9}],
				nodes: [{
					ID: "58c8e9d6000001f63332070da815e7ea",
					name: "Write requirments",
					objCode: "TASK",
					hour: {planned: 9, budgeted: 5, actual: 10},
					nodes: []
				}]
			}]
		}]
	},

	{
		ID: "58c8e9ba000001b6e66a0dbb46c9d11a3",
		name: "Project Spring",
		priority: 1,
		objCode: "PROJ",
		hours: [{actual: 5}, {actual: 6}, {actual: 7}, {actual: 10}],
		nodes: [{
			ID: "58c8eb2200000496f72493fc76929cff",
			name: "Product Manager",
			objCode: "ROLE",
			nodes: [{
				ID: "58c8eb28000004b5d2624e33d01c76d1",
				name: "Vazgen Babayan",
				objCode: "USER",
				hours: [{available: 9}, {available: 9}, {available: 9}, {available: 9}],
				nodes: [{
					ID: "58c8e9d6000001f63332070da815e7ea",
					name: "Write requirments",
					objCode: "TASK",
					hour: {planned: 9, budgeted: 5, actual: 10},
					nodes: []
				}]
			}]
		}]
	}
];

function recursiveIteration(array) {
	if (array.length === 0) {
		return;
	}

	return array.map(node => {
		if (node.objCode === 'USER') {
			console.log(node.objCode, node.name, 'userrrr', new HourModel(node.nodes).budgetedHour);

			return new HourModel(node.nodes);
		}

		console.log(node.objCode, node.name);

		return new HourModel(recursiveIteration(node['nodes']));
	});

}

var projectConverted = recursiveIteration(requestedData);

console.log(projectConverted, projectConverted[2].budgetedHour);
/*
 function getObjectConvertedNodes(node) {
 if ((node.nodes && node.length === 0 ) || !node.nodes) {
 return [];
 }
 return node.nodes.map(node => new HourModel(node.nodes))
 .reduce((acc, val) => [...acc, ...val.nodes], []);
 }

 getObjectConvertedNodes(nodes);
 */
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

