import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CarrierComponent } from './carrier/carrier.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';


const routes: Routes = [
  { path: 'home' , component:HomeComponent },
  { path: 'about_me' , component:AboutComponent },
  { path: 'carrier' , component:CarrierComponent },,
  { path: 'contact' , component:ContactComponent },
  { path: 'my_work' , component:WorkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
