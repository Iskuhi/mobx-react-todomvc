import {observable, computed} from 'mobx';

export default class TodoModel {
	store;
	id;
	@observable title;
	@observable completed;

	constructor(store, id, title, completed) {
		this.store = store;
		this.id = id;
		this.title = title;
		this.completed = completed;
	}


	toJS() {
		return {
			id: this.id,
			title: this.title,
			completed: this.completed
		};
	}

	static fromJS(store, object) {
		return new TodoModel(store, object.id, object.title, object.completed);
	}
}
