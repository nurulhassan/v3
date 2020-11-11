import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CarrierComponent } from './carrier/carrier.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import {MySkillComponent} from './my-skill/my-skill.component'


const routes: Routes = [
  { path: 'home' , component:HomeComponent },
  { path: '' , redirectTo:'/home', pathMatch:'full' },
  // { path: '**' , component:PageNotFoundComponent },
  { path: 'about_me' , component:AboutComponent },
  { path: 'carrier' , component:CarrierComponent },
  { path: 'contact_me' , component:ContactComponent },
  { path: 'my_work' , component:WorkComponent },
  { path: 'my_skills' , component: MySkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
