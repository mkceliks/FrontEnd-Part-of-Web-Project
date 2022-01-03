import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MainCategoryComponent } from './components/main-category/main-category.component';
import { MainPageSectionComponent } from './components/main-page-section/main-page-section.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { TodoComponent } from './components/todo/todo.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"todos", component:TodoComponent},
  {path:"",component:MainPageSectionComponent},
  {path:"discover",component:MainCategoryComponent},
  {path:"products/details/:productId", component:ProductsComponent},
  {path:"products/category/:brandId", component:MainPageComponent},
  {path:"products/add",component:ProductAddComponent, canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"products",component:MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
