import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavComponent} from './components/nav/nav.component';
import {SimpleComponent} from './components/sliders/simple/simple.component';
import {SharedModule} from "./shared/shared.module";
import { MouseMoveComponent } from './components/mouse-move/mouse-move.component';
import { MasonrySt1Component } from './components/galleries/masonry-st1/masonry-st1.component';
import {AppRoutingModule} from "./app-routing.module";
import { MasonrySt2Component } from './components/galleries/masonry-st2/masonry-st2.component';
import { MasonrySt3Component } from './components/galleries/masonry-st3/masonry-st3.component';
import { MasonrySt4Component } from './components/galleries/masonry-st4/masonry-st4.component';
import { GridSt1Component } from './components/galleries/grid-st1/grid-st1.component';
import { GridSt2Component } from './components/galleries/grid-st2/grid-st2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SimpleComponent,
    MouseMoveComponent,
    MasonrySt1Component,
    MasonrySt2Component,
    MasonrySt3Component,
    MasonrySt4Component,
    GridSt1Component,
    GridSt2Component
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
