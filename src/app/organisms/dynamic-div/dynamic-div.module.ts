import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDivComponent } from './dynamic-div.component';
import { DynamicDivDirective } from './dynamic-div.directive';

@NgModule({
  declarations: [DynamicDivComponent, DynamicDivDirective],
  imports: [CommonModule],
  exports: [DynamicDivComponent],
})
export class DynamicDivModule {}
