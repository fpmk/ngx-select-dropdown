import { SelectDropDownService } from "./ngx-select-dropdown.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxSelectDropdownComponent } from "./ngx-select-dropdown.component";
import { FilterByPipe } from "./pipes/filter-by.pipe";
import { LimitToPipe } from "./pipes/limit-to.pipe";
@NgModule({
  declarations: [NgxSelectDropdownComponent, FilterByPipe, LimitToPipe],
  imports: [CommonModule, FormsModule],
  exports: [NgxSelectDropdownComponent, FilterByPipe, LimitToPipe],
  providers: [],
})
export class SelectDropDownModule {
  // static forRoot(): ModuleWithProviders<SelectDropDownModule> {
  //   return {
  //     ngModule: SelectDropDownModule,
  //     providers: [SelectDropDownService],
  //   };
  // }
}
