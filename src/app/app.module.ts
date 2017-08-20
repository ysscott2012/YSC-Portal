import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Modules
import { AuthenticationModule } from './authentication/authentication.module';
import { PageModule } from './page/page.module'

// Component
import { AppComponent } from './app.component';

// Routes
import { AppRoutes } from './app.route';
import { AuthenticationRoutes } from './authentication/authentication.route';
import { PageRoutes } from './page/page.route';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthenticationModule,
    PageModule,
    AppRoutes,
    AuthenticationRoutes,
    PageRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
