import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubComponent } from './github/github.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LiveEditorComponent } from './live-editor/live-editor.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserComponent } from './user/user.component';
import { UiTesterComponent } from './ui-tester/ui-tester.component';
import {MonacoEditorModule, NgxMonacoEditorConfig} from 'ngx-monaco-editor';

const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'app-name/assets', // configure base path for monaco editor
  defaultOptions: { scrollBeyondLastLine: false }, // pass default options to be used
  onMonacoLoad: () => { console.log((<any>window).monaco); } // here monaco object will be available as window.monaco use this function to extend monaco editor functionality.
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubComponent,
    LiveEditorComponent,
    HomePageComponent,
    SigninComponent,
    SignupComponent,
    UserComponent,
    UiTesterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    MonacoEditorModule.forRoot(monacoConfig),
    FormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
