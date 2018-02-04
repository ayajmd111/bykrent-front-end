import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BikesComponent } from './bikes/bikes.component';
import { ProductsComponent } from './products/products.component';
import {CommonService} from './common.service';
import { HomeComponent } from './home/home.component';
import { BikeRegisterComponent } from './bike-register/bike-register.component';
import { BookStatusComponent } from './book-status/book-status.component';
import { SwapComponent } from './swap/swap.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    BikesComponent,
    ProductsComponent,
    HomeComponent,
    BikeRegisterComponent,
    BookStatusComponent,
    SwapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full' },
     { path: "login", component: LoginComponent },
     { path: "register", component: RegisterComponent },
     { path: "home", component: HomeComponent },
     { path: "bikeregister", component: BikeRegisterComponent },
     { path: "products", component: ProductsComponent },
     { path: "bookStatus", component: BookStatusComponent },
     { path: "swap", component: SwapComponent }

    ]),
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
