import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from './products';
import { Categoria } from '../categorias/categoria';
import { ProductsDialogComponent } from '../products-dialog/products-dialog.component'
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	@Input() sendData: Array<Products>;
	@Input() category: Categoria;
	@Output() eventCategory = new EventEmitter<Categoria>();

	public iva: number = environment.iva;
	public filerData: Array<Products>;
	public total: number = 0;
	public subTotal: number = 0;
	public totaIva: number = 0;

	constructor(
		public dialog: MatDialog,
	) { }

	ngOnInit(): void {

	}

	checkProduct() {
		this.filerData = this.sendData.filter(prod => Boolean(prod.estado) == true)
		let initialValue = 0;
		this.total = this.filerData.reduce(function (total, currentValue) {
			return total + currentValue.precio;
		}, initialValue);
		this.totaIva = this.iva * this.total / 100;
		this.subTotal = this.total - this.totaIva;

	}

	openDialog() {
		let dialogRef = this.dialog.open(ProductsDialogComponent, {
			data: {
				category: this.category
			}
		});

		dialogRef.afterClosed().subscribe(result => {
			this.sendMessage(result)
		});
	}

	sendMessage(data: any) {
		this.eventCategory.emit(data)
	}
}
