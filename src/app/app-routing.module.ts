import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvanceFormsComponent } from './components/advance-forms/advance-forms.component';

const routes: Routes = [
  {
    path:'',
    component:AdvanceFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
