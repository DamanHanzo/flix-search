import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';

import { Details } from './details';
import { Episodes } from './episode';


@Component({
  moduleId: module.id,
  templateUrl: 'details.template.html'
})

export class DetailsComponent implements OnInit {
	details: Details;
	Episodes: Episodes[];
	isLoading: boolean = false;
	errorMessage: string;

	constructor(private route: ActivatedRoute,
				private _detailsService: DetailsService){
		console.log(this.route.snapshot.params['id']);
		console.log(this.route.snapshot.params['show']);
	}

	ngOnInit(){
		let id = +this.route.snapshot.params['id']; //the plus is used to convert a number to a string
		let show = this.route.snapshot.params['show'];
		this.getShowDetails(id, show);
	}

	getShowDetails(id: number, show: string){
		this.isLoading = true;
		this._detailsService.getShowDetails(id, show)
			.subscribe(
				results => {
					console.log(results);
					this.isLoading = false;
					this.details = results[0];
					this.Episodes = results[1];
				},
				error => this.errorMessage = <any> error
				);
	}
}
