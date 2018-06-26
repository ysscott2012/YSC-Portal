import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Http
// https://stackoverflow.com/questions/35375530/how-do-i-add-a-json-web-token-to-each-header
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { HttpService } from './private/services/http.service';

// Moduless
import { AdminModule } from './private/admin/admin.module';
import { AlgorithmModule } from './private/algorithm/algorithm.module';
import { AuthenticationModule } from './public/authentication/authentication.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserModule } from './private/user/user.module';
import { ChatModule } from './private/chat/chat.module';
import { FilesModule } from './private/files/files.module';
import { KanbanModule } from './private/kanban/kanban.module';
import { SharedModule } from './private/shared/shared.module';

// Component
import { AppComponent } from './app.component';

// Routes
import { AppRoutes } from './app.route';
import { AdminRoutes } from './private/admin/admin.route';
import { AlgorithmRoute } from './private/algorithm/algorithm.route';
import { AuthenticationRoutes } from './public/authentication/authentication.route';
import { ChatRoutes } from './private/chat/chat.route';
import { KanbanRoutes } from './private/kanban/kanban.route';
import { UserRoutes } from './private/user/user.route';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    AppRoutes,
    // Admin
    AdminModule,
    AdminRoutes,
    // Authentication
    AuthenticationModule,
    AuthenticationRoutes,
    // Algorithms
    AlgorithmModule,
    AlgorithmRoute,
    // Chat
    ChatModule,
    ChatRoutes,
    // Knabna
    KanbanModule,
    KanbanRoutes,
    // Files
    FilesModule,
    // User
    UserModule,
    UserRoutes,
  ],
  providers: [
    HttpService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
