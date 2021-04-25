import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { IndexComponent } from './index.component';

@NgModule({
	declarations: [
		IndexComponent
	],
	imports: [
		CommonModule,
		PanelRoutingModule
	]
})
export class PanelModule { }
