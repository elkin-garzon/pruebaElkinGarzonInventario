import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { CategoriasComponent } from './categorias/categorias.component';

const routes: Routes = [
	{
		path: '',
		component: IndexComponent,
		children: [
			{
				path: 'listaCategoria',
				component: CategoriasComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PanelRoutingModule { }
