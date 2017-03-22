/**
 * Created by iskuhihakobyan on 3/22/17.
 */
import {observable, computed} from 'mobx';

export default class HourModel {
	@observable nodes;

	constructor(nodes) {
		this.nodes = nodes;
	}

	@computed get budgetedHour() {
		return this.nodes.reduce((sum, node) => sum + (node.budgetedHour || node.hour.budgeted), 0);
	}

	set budgetedHour(value) {
		let dividedValue = value / this.nodes.length;
		console.log('setter', dividedValue);
		this.nodes.map(node=> node.hour.budgeted = dividedValue);
	}
}
