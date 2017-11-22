import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Http
// https://stackoverflow.com/questions/35375530/how-do-i-add-a-json-web-token-to-each-header
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { HttpService } from './private/services/http.service';

// Moduless
import { AdminModule } from './private/admin/admin.module';
import { AuthenticationModule } from './public/authentication/authentication.module';
import { UserModule } from './private/user/user.module';
import { ChatModule } from './private/chat/chat.module';
import { FilesModule } from './private/files/files.module';
import { SharedModule } from './private/shared/shared.module';

// Component
import { AppComponent } from './app.component';

// Routes
import { AppRoutes } from './app.route';
import { AdminRoutes } from './private/admin/admin.route';
import { AuthenticationRoutes } from './public/authentication/authentication.route';
import { UserRoutes } from './private/user/user.route';
import { ChatRoutes } from './private/chat/chat.route';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    // Admin
    AdminModule,
    AdminRoutes,
    // Authentication
    AuthenticationModule,
    AuthenticationRoutes,
    // User
    UserModule,
    UserRoutes,
    // Chat
    ChatModule,
    ChatRoutes,
    // Files
    FilesModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
