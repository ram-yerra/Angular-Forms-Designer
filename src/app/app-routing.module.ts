import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'forms', pathMatch: 'full' },
  { path: 'forms', loadChildren: () => import('./dynamic-forms/dynamic-forms.module').then(m => m.DynamicFormsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
