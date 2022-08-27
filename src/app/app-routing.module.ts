import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BusinessloanComponent } from './businessloan/businessloan.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { LoanservicesComponent } from './loanservices/loanservices.component';
import { PersonalloanComponent } from './personalloan/personalloan.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component:  HomeComponent},
  { path: 'home/services', component: LoanservicesComponent},
  { path: 'home/services/personal-loan', component:  PersonalloanComponent},
  { path: 'home/services/home-loan', component: HomeloanComponent},
  { path: 'home/services/business-loan', component: BusinessloanComponent},
  { path: 'home/about-us', component: AboutusComponent},
  { path: 'home/contact-us', component: ContactusComponent},
  { path: 'home/blogs', component: BlogsComponent}
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
