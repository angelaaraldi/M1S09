import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DietComponent } from './diet.component';
import { DietDetailComponent } from '../diet-detail/diet-detail.component';

const dietRoutes: Routes = [
  { path: "", component: DietComponent },
  { path: ":id", component: DietDetailComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(dietRoutes)
  ]
})
export class DietModule { }
