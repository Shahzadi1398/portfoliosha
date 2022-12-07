import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TehcnicalSkillsComponent } from './tehcnical-skills/tehcnical-skills.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'technical', component:TehcnicalSkillsComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
