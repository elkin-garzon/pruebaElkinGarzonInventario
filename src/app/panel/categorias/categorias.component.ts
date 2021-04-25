import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria';
import { Products } from '../products/products';
import { MatDialog } from '@angular/material/dialog';
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products/products.service';

@Component({
	selector: 'app-categorias',
	templateUrl: './categorias.component.html',
	styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

	public listCategories: Array<Categoria> = [];
	public listProducts: Array<Products> = [];
	public formFilter: FormGroup;
	public category: Categoria = new Categoria();
	public selectCategory: Categoria = new Categoria();
	public viewProducts: Boolean = false;

	constructor(
		public service: CategoriaService,
		public productService: ProductsService,
		public dialog: MatDialog,
		public formBuilder: FormBuilder,
	) { }

	ngOnInit(): void {
		this.formFilter = this.formBuilder.group({
			categoria: [this.category.categoria, [Validators.required, Validators.minLength(3)]]
		});

		this.formFilter.valueChanges.subscribe(() => {
			this.search();
		});

		this.getData();
	}

	getData() {
		this.listCategories = [];
		this.formFilter.reset();
		this.service.getData().subscribe((resp: any) => {
			this.listCategories = resp;
		})
	}

	openDialog() {
		let dialogRef = this.dialog.open(CategoryDialogComponent);
		dialogRef.afterClosed().subscribe(result => {
			if (result.id) {
				this.getData();
			}
		});
	}

	search() {
		if (this.formFilter.valid) {
			this.viewProducts = false;
			this.listCategories = [];
			this.service.filterData(this.formFilter.value).subscribe((resp: any) => {
				this.listCategories = resp;
			})
		}
	}

	selectedCategory(row: Categoria) {
		this.selectCategory = row;
		this.viewProducts = false;
		this.productService.getDataProducts(row).subscribe((resp: any) => {
			this.viewProducts = true;
			this.listProducts = resp;
		})
	}

	receiveData($event) {
		this.selectCategory = new Categoria();
		this.selectCategory.id = $event.id_categoria;
		this.selectedCategory(this.selectCategory);
	}
}
