import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'shop', pathMatch: 'full'},
  { path: '', component: LayoutComponent, children: [
    { path: 'shop', component: ShopComponent},
    { path: 'product', component: ProductComponent},
  ]}
];

@NgModule({
  imports: [


  RouterModule.forRoot(routes),
 ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
