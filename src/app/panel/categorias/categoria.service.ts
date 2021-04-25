import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categoria } from '../categorias/categoria';

@Injectable({
	providedIn: 'root'
})
export class CategoriaService {

	constructor(
		private http: HttpClient
	) {

	}

	getData() {
		let url = `${environment.urlBack}/categorias`;
		return this.http.get(url)
	}

	filterData(filter: Categoria) {
		let url = `${environment.urlBack}/categorias`;
		let params = new HttpParams();
		params = params.append('q', filter.categoria);
		return this.http.get(url, {params})
	}

	postData(data: Categoria) {
		let url = `${environment.urlBack}/categorias`;
		return this.http.post(url, data)
	}
}
