import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { SearchService } from '@marci/search';
import { AppRoutingModule } from './list-routing.module';



@NgModule({
  declarations: [ListComponent],
  imports: [
    AppRoutingModule
  ],
  exports: [ListComponent],
  providers: [SearchService]
})
export class ListModule { }
