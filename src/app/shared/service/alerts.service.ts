import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class AlertsService {

	constructor(
		private toastr: ToastrService
	) { }


	errors(message: string) {
		this.toastr.error(message)
	}
}
