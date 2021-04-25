import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Categoria } from '../categorias/categoria';
import { CategoriaService } from '../categorias/categoria.service';
import { AlertsService } from 'src/app/shared/service/alerts.service';

@Component({
	selector: 'app-category-dialog',
	templateUrl: './category-dialog.component.html',
	styleUrls: ['./category-dialog.component.scss']
})
export class CategoryDialogComponent implements OnInit {

	public formCategory: FormGroup;
	public category: Categoria = new Categoria();

	constructor(
		public dialogRef: MatDialogRef<CategoryDialogComponent>,
		public formBuilder: FormBuilder,
		public service: CategoriaService,
		public alertas: AlertsService
	) {
		this.dialogRef.disableClose = true;
	}

	ngOnInit(): void {
		this.formCategory = this.formBuilder.group({
			categoria: [this.category.categoria, [Validators.required]]
		});
	}

	submit() {
		if (this.formCategory.valid) {
			this.service.postData(this.formCategory.value).subscribe((resp: any) => {
				if (resp.id) {
					this.dialogRef.close(resp);
				} else {
					this.alertas.errors('Ha ocurrido un error')
				}
			})
		}
	}
}
