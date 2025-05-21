import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './components/produit/produit.component';
import { CategoryComponent } from './components/category/category.component';
import { HistoryComponent } from './components/history/history.component';
import { StateComponent } from './components/state/state.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'produites' },
  { path: 'produites', component: ProduitComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'historiques', component: HistoryComponent },
  { path: 'statistiques', component: StateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
