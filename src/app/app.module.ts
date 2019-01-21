import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavComponent} from './components/nav/nav.component';
import {SimpleComponent} from './components/sliders/simple/simple.component';
import {SharedModule} from "./shared/shared.module";
import { MouseMoveComponent } from './components/mouse-move/mouse-move.component';
import { MasonrySt1Component } from './components/galleries/masonry-st1/masonry-st1.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SimpleComponent,
    MouseMoveComponent,
    MasonrySt1Component
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
