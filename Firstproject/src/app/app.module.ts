import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {FirstserviceService} from './services/firstservice.service';
import { Component1Component } from './components/component1/component1.component';
import {SortPipe} from './app.sortPipe';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ModelFormComponent } from './components/model-form/model-form.component';

const myRoutes:Routes =[

  {
    path:"component1",
    component:Component1Component
  },
  {
    path:"templateform",
    component:TemplateFormComponent
  },
  {
    path:"modelform",
    component:ModelFormComponent
  }


]

@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    Component1Component,
    TemplateFormComponent,
    ModelFormComponent

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(myRoutes),
    HttpModule
  ],
  providers: [FirstserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
