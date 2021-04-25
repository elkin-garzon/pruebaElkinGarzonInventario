import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from '../categorias/categoria';
import { Products } from '../products/products';
import { ProductsService } from '../products/products.service';
import { AlertsService } from 'src/app/shared/service/alerts.service';


@Component({
	selector: 'app-products-dialog',
	templateUrl: './products-dialog.component.html',
	styleUrls: ['./products-dialog.component.scss']
})
export class ProductsDialogComponent implements OnInit {

	public category: Categoria = new Categoria();
	public products: Products = new Products();
	public formProduct: FormGroup;

	constructor(
		public dialogRef: MatDialogRef<ProductsDialogComponent>,
		public formBuilder: FormBuilder,
		public service: ProductsService,
		public alertas: AlertsService,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.category = data.category;
		this.dialogRef.disableClose = true;
	}

	ngOnInit(): void {
		this.products.id_categoria = this.category.id;
		this.formProduct = this.formBuilder.group({
			nombre: [this.products.nombre, [Validators.required]],
			id_categoria: [this.products.id_categoria, [Validators.required]],
			precio: [this.products.precio, [Validators.required]],
			estado: [this.products.estado, [Validators.required]],
		});
	}


	submit() {
		if (this.formProduct.valid) {
			this.service.postData(this.formProduct.value).subscribe((resp: any) => {
				if (resp.id) {
					this.dialogRef.close(resp);
				} else {
					this.alertas.errors('Ha ocurrido un error')
				}
			})
		}
	}
}
