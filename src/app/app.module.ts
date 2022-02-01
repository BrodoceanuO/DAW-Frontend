import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';
import { CustomStyleDirective } from './pages/login/custom-style.directive';
import { WelcomePipe } from './pages/login/welcome.pipe';
import { MonitorInterceptor } from './interceptors/monitor.interceptor';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions.component';
import { ThemesComponent } from './pages/themes/themes.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CustomStyleDirective,
    WelcomePipe,
    SubscriptionsComponent,
    ThemesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpErrorsInterceptor,
      multi:true,
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: MonitorInterceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
