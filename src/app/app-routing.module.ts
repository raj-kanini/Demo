import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactformComponent } from './components/contactform/contactform.component';
import { TermspageComponent } from './components/termspage/termspage.component';
import { ShopComponent } from './components/shop/shop.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { BillingComponent } from './components/billing/billing.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contactform', component: ContactformComponent },
  { path: 'terms', component: TermspageComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'addproduct', component: AddProductComponent },
  { path: 'viewproduct/:id', component: ViewProductComponent },
  { path: 'adminpage', component: AdminpageComponent },
  { path: 'billing', component: BillingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
