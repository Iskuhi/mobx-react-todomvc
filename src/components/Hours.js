/**
 * Created by iskuhihakobyan on 3/21/17.
 */
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';


@observer
export default class Hours extends Component {
	@observable hours = {

		"ID": "58c8e9ba000001b6e66a0dbb46c9d11a",
		"name": "Project Spring",
		"objCode": "PROJ",
		"nodes": [
			{
				"ID": "5788f48b000005e44fe3b741988b7b18",
				"name": "Designer",
				"objCode": "ROLE",
				"nodes": [
					{
						"ID": "58c8eae50000040a1f07248c1c4b7d06",
						"name": "Susik Minasyan",
						"avatarDownloadURL": "/user/avatar?ID=58c8eae50000040a1f07248c1c4b7d06&time=1489562411000",
						"objCode": "USER",
						"hours": [
							{

								"from": '',
								"to": '',
								"available": 9,
								"budgeted": null
							}
						],
						"nodes": [
							{
								"ID": "58c8e9d3000001e7958b63315b227bd5",
								"name": "Create Mock",
								"objCode": "TASK",
								"nodes": [],
								"hours": [
									{
										"from": '',
										"to": '',
										"planned": 9,
										"budgeted": null,
										"actual": null
									}
								]
							}
						]
					}
				]
			},
			{
				"ID": "58c8eb2200000496f72493fc76929cff",
				"name": "Product Manager",
				"objCode": "ROLE",
				"nodes": [
					{
						"ID": "58c8eb28000004b5d2624e33d01c76d1",
						"name": "Vazgen Babayan",
						"avatarDownloadURL": "/user/avatar?ID=58c8eb28000004b5d2624e33d01c76d1&time=1489562470000",
						"objCode": "USER",
						"nodes": [
							{
								"ID": "58c8e9d6000001f63332070da815e7ea",
								"name": "Write requirments",
								"objCode": "TASK",
								"hours": [
									{
										"from": '',
										"to": '',
										"budgeted": 20
									}
								],
								"nodes": []
							}
						]
					}
				]
			},
			{
				"ID": "5788f48b000005e56d831249f2143c25",
				"name": "Engineer",
				"objCode": "ROLE",
				"nodes": [
					{
						"ID": "58c8eb680000052a75da51c66258b1a7",
						"name": "Ani Hambardzumyan",
						"avatarDownloadURL": "/user/avatar?ID=58c8eb680000052a75da51c66258b1a7&time=1489562515000",
						"objCode": "USER",
						"nodes": [
							{
								"ID": "58c8e9d80000020764b4191824baf883",
								"name": "Implementation 1",
								"objCode": "TASK",
								"hours": [
									{
										"from": '',
										"to": '',
										"budgeted": 25
									}
								],
								"nodes": []
							},
							{
								"ID": "58c8f54700000a9e5c676ab4aad59bc0",
								"name": "Dev Testing",
								"objCode": "TASK",
								"hours": [
									{
										"from": '',
										"to": '',
										"budgeted": 30
									}
								],
								"nodes": []
							}
						]
					},
					{
						"ID": "58c8eb970000058ba626e2b238c3f658",
						"name": "Iskuhi Hakobyan",
						"avatarDownloadURL": "/user/avatar?ID=58c8eb970000058ba626e2b238c3f658&time=1489562578000",
						"objCode": "USER",
						"nodes": [
							{
								"ID": "58c8e9d80000020764b4191824baf883",
								"name": "Implementation 1",
								"objCode": "TASK",
								"hours": [
									{
										"from": '',
										"to": '',
										"budgeted": 34
									}
								],
								"nodes": []
							},
							{
								"ID": "58c8f54700000a9e5c676ab4aad59bc0",
								"name": "Dev Testing",
								"objCode": "TASK",
								"hours": [
									{
										"from": '',
										"to": '',
										"budgeted": 6
									}
								],
								"nodes": []
							}
						]
					}
				]
			},
			{
				"ID": "58ad490e0000027d0217de9ec8416284",
				"name": "Role 1",
				"objCode": "ROLE",
				"nodes": [
					{
						"ID": "58c8eb680000052a75da51c66258b1a7",
						"name": "Ani Hambardzumyan",
						"avatarDownloadURL": "/user/avatar?ID=58c8eb680000052a75da51c66258b1a7&time=1489562515000",
						"objCode": "USER",
						"nodes": [
							{
								"ID": "58c8e9da0000021862384c8598b1f29d",
								"name": "Implementation 2",
								"objCode": "TASK",
								"hours": [
									{
										"from": '',
										"to": '',
										"budgeted": 12
									}
								],
								"nodes": []
							}
						]
					}
				]
			},
			{
				"ID": "58ad490e0000029896815ef55f40388a",
				"name": "Role 12",
				"objCode": "ROLE",
				"nodes": [
					{
						"ID": "58c8eb970000058ba626e2b238c3f658",
						"name": "Iskuhi Hakobyan",
						"avatarDownloadURL": "/user/avatar?ID=58c8eb970000058ba626e2b238c3f658&time=1489562578000",
						"objCode": "USER",
						"nodes": [
							{
								"ID": "58c8e9da0000021862384c8598b1f29d",
								"name": "Implementation 2",
								"objCode": "TASK",
								"hours": [
									{
										"from": '',
										"to": '',
										"budgeted": 34
									}
								],
								"nodes": []
							}
						]
					}
				]
			},
			{
				"ID": "5788f48b000005e690d300a0339b2edb",
				"name": "Project Manager",
				"objCode": "ROLE",
				"nodes": [
					{
						"ID": "5788f49000000975a2a46b900a0422cf",
						"avatarDownloadURL": "/user/avatar?ID=5788f49000000975a2a46b900a0422cf&time=1489562340000",
						"name": "Karen Filippelli",
						"objCode": "USER",
						"nodes": {
							"ID": "58c8e9dc00000229f544b6bbe6590c67",
							"name": "Managment",
							"objCode": "TASK",
							"hours": [
								{
									"from": '',
									"to": '',
									"budgeted": 111
								}
							],
							"nodes": []
						}
					}
				]
			},
			{
				"ID": "5788f48b000005e7b92eb53a5b33e67e",
				"name": "QA Engineer",
				"objCode": "ROLE",
				"nodes": [
					{
						"ID": "5788f49000000973e2f2b7415c34264a",
						"name": "Ryan Howard",
						"avatarDownloadURL": "/user/avatar?ID=5788f49000000973e2f2b7415c34264a&time=1489562320000",
						"objCode": "USER",
						"nodes": [
							{
								"ID": "58c8e9de0000023a9b5f5978f01ebbac",
								"name": "Testing",
								"objCode": "TASK",
								"hours": [
									{
										"from": '',
										"to": '',
										"budgeted": 20
									}
								],
								"nodes": []
							}
						]
					},
					{
						"ID": "5788f49000000975a2a46b900a0422cf",
						"name": "Karen Filippelli",
						"avatarDownloadURL": "/user/avatar?ID=5788f49000000975a2a46b900a0422cf&time=1489562340000",
						"objCode": "USER",
						"nodes": [
							{
								"ID": "58c8e9de0000023a9b5f5978f01ebbac",
								"name": "Testing",
								"objCode": "TASK",
								"hours": [
									{
										"from": '',
										"to": '',
										"budgeted": 777
									}
								],
								"nodes": []
							}
						]
					}
				]
			}
		]
	};

	constructor(props) {
		super(props);

		this.getHours = this.getHours.bind(this);
	}


	getHours(nodes, hours = []) {
		if (nodes.length > 0) {
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

	render() {
		//const {todoStore, viewStore} = this.props;
		//let aaa = [];
		//this.getHours(this.state.hours.nodes, aaa);
		//console.log('houres', aaa);
		return (
			<div>

			</div>
		);
	}


}