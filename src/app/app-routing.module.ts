import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { SortComponent } from './components/sort/sort.component';
import { FilterComponent } from './components/filter/filter.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { HeaderComponent } from './components/header/header.component';
// import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

const routes: Routes = [
  // {path: 'confirm/:name', component: ConfirmDialogComponent}
  {path: '', redirectTo: 'header', pathMatch: 'full'},
  {path: 'header', component: HeaderComponent},
  {path: 'search', component: SearchComponent},
  {path: 'cart', component: CartIconComponent},
  {path: 'sort', component: SortComponent},
  {path: 'filter', component: FilterComponent},
  {path: 'shoppingList', component: ShoppingListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
