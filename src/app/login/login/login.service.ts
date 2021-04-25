import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { Login } from './login';
@Injectable({
	providedIn: 'root'
})
export class LoginService {

	constructor(
		private http: HttpClient
	) {

	}

	/**
	 * metodo login
	 * @param loginModel objeto tipo login
	 * @returns 
	 */
	login(loginModel: Login) {
		let url = `${environment.urlBack}/login`;
		let params = new HttpParams();
		params = params.append('email', loginModel.email);
		params = params.append('password', loginModel.password);
		return this.http.get(url, { params })
	}
}
