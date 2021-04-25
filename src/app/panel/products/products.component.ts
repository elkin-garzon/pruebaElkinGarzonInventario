import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from './products';
import { Categoria } from '../categorias/categoria';
import { ProductsDialogComponent } from '../products-dialog/products-dialog.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	@Input() sendData: Array<Products>;
	@Input() category: Categoria;
	@Output() eventCategory = new EventEmitter<Categoria>();

	constructor(
		public dialog: MatDialog,
	) { }

	ngOnInit(): void {

	}

	checkProduct(row: Products) {
		console.log(row)
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
