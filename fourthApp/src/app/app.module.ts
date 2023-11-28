import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { ChildComponent } from './child/child.component'
import { FormsModule} from '@angular/forms';
import { UsdInrPipe } from './pipes/usd-inr.pipe'
import { ReactiveFormsModule} from '@angular/forms';
import { RedE1Directive } from './red-e1.directive'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChildComponent,
    UsdInrPipe,
    RedE1Directive
  ],
  imports: [
    UserAuthModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
