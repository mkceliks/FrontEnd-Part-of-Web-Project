import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductsComponent } from './components/products/products.component';
import { TodoComponent } from './components/todo/todo.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"todos", component:TodoComponent},
  {path:"",pathMatch:"full", component:ProductsComponent},
  //{path:"products", component:ProductsComponent},
  {path:"products/category/:brandId", component:ProductsComponent},
  //{path:"",pathMatch:"full", component:FooterComponent},
  {path:"products/add",component:ProductAddComponent, canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
