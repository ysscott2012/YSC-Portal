import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Http
// https://stackoverflow.com/questions/35375530/how-do-i-add-a-json-web-token-to-each-header
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { HttpService } from './services/http.service';

// Modules
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './user/user.module';

// Component
import { AppComponent } from './app.component';

// Routes
import { AppRoutes } from './app.route';
import { AuthenticationRoutes } from './authentication/authentication.route';
import { UserRoutes } from './user/user.route';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthenticationModule,
    UserModule,
    AppRoutes,
    AuthenticationRoutes,
    UserRoutes
  ],
  providers: [
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
