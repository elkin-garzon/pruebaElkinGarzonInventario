import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelRoutingModule } from './panel-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndexComponent } from './index.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDialogComponent } from './products-dialog/products-dialog.component';

@NgModule({
	declarations: [
		IndexComponent,
		CategoriasComponent,
		CategoryDialogComponent,
		ProductsComponent,
		ProductsDialogComponent
	],
	imports: [
		CommonModule,
		PanelRoutingModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule
	],
	entryComponents: [
		CategoryDialogComponent,
		ProductsDialogComponent
	]
})
export class PanelModule { }
