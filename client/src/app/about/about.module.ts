import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AboutHomeComponent, CarouselComponent } from './index';

import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [AboutHomeComponent, CarouselComponent],
  imports: [
    CommonModule,
    SharedModule,
    AboutRoutingModule,
	  MaterialModule
  ]
})
export class AboutModule { }
