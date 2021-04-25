import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndexComponent } from './index.component';

@NgModule({
	declarations: [
		IndexComponent
	],
	imports: [
		CommonModule,
		PanelRoutingModule,
		SharedModule
	]
})
export class PanelModule { }
