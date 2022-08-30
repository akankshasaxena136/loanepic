import { CUSTOM_ELEMENTS_SCHEMA, NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {  } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from  '@angular/material/icon';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { MatGridListModule } from  '@angular/material/grid-list';
import { MatCardModule } from  '@angular/material/card';
import { MatMenuModule } from  '@angular/material/menu';
import { MatFormFieldModule } from  '@angular/material/form-field';
import { MatInputModule } from  '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';


import { ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonalloanComponent } from './personalloan/personalloan.component';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { BusinessloanComponent } from './businessloan/businessloan.component';
import { LoanservicesComponent } from './loanservices/loanservices.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContactService } from './contactus/contact.service';
import { ApplynowComponent } from './applynow/applynow.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PersonalloanComponent,
    HomeloanComponent,
    BusinessloanComponent,
    LoanservicesComponent,
    AboutusComponent,
    ContactusComponent,
    ApplynowComponent,
    BlogsComponent,
    SidenavListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatGridListModule, MatCardModule, MatMenuModule,
    ReactiveFormsModule, MatFormFieldModule, MatInputModule, FlexLayoutModule, MatDialogModule, MatListModule,
    ShareButtonsModule,
    // .withConfig({
    //   debug: true,
    // }),
    ShareIconsModule,
  ],
  exports: [
    MatListModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
