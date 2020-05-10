import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BurgersComponent } from './burgers/burgers.component';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component';

const routes: Routes = [
  {path: '', component: BurgersComponent},
  {path: 'burgerDetail/:id', component: BurgerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
