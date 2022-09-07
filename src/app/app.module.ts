import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { ReferenceVariableComponent } from './components/reference-variable/reference-variable.component';
import { UsersComponent } from './components/users/users.component';
import { HeaderComponent } from './components/header/header.component';
import { CalculatorComponent } from './scr/app/components/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    ReferenceVariableComponent,
    UsersComponent,
    HeaderComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
