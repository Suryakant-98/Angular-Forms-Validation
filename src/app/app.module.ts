import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatchPasswordDirective } from './directives/match-password-directive.directive';
import { PasswordPatternDirective } from './directives/password-pattern-directive.directive';
import { ValidateUserNameDirective } from './directives/validate-user-name-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    MatchPasswordDirective,
    PasswordPatternDirective,
    ValidateUserNameDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "reactive-form", component: ReactiveFormComponent },
      {
        path: "template-driven-form",
        component: TemplateDrivenFormComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
