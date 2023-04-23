import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { UserLayoutComponent } from './layouts//user-layout/user-layout.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth/auth.guard'




@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    UserLayoutComponent,
    UserSidebarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: false
    }),
    SidebarModule,
    FormsModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    HttpClientModule
  ],
  providers: [AuthGuard, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
