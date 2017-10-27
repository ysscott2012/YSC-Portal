import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Http
// https://stackoverflow.com/questions/35375530/how-do-i-add-a-json-web-token-to-each-header
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { HttpService } from './services/http.service';
import { SharedService } from './services/shared.service';

// Moduless
import { AdminModule } from './admin/admin.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { FilesModule } from './files/files.module';
import { SharedModule } from './shared/shared.module';

// Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// Routes
import { AppRoutes } from './app.route';
import { AdminRoutes } from './admin/admin.route';
import { AuthenticationRoutes } from './authentication/authentication.route';
import { UserRoutes } from './user/user.route';
import { ChatRoutes } from './chat/chat.route';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileMenuComponent,
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
    FilesModule,
    SharedModule
  ],
  providers: [
    HttpService,
    SharedService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
