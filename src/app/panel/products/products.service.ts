import { Injectable } from '@angular/core';
import { Categoria } from '../categorias/categoria';
import { Products } from './products';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {

	constructor(
		private http: HttpClient
	) {

	}

	/**
	 * listar productos por categoria
	 * @param row modelo categoria
	 * @returns 
	 */
	getDataProducts(row: Categoria) {
		let url = `${environment.urlBack}/productos`;
		let params = new HttpParams();
		params = params.append('id_categoria', String(row.id));
		return this.http.get(url, { params })
	}

	postData(row: Products) {
		let url = `${environment.urlBack}/productos`;
		return this.http.post(url, row)
	}
}
