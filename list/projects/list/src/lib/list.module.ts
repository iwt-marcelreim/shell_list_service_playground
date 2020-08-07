import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { SearchService } from '@marci/search';
import { AppRoutingModule } from './list-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [ListComponent],
  providers: [SearchService]
})
export class ListModule { }
