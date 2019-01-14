import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavComponent} from './components/nav/nav.component';
import {SimpleComponent} from './components/sliders/simple/simple.component';
import {SharedModule} from "./shared/shared.module";
import { MouseMoveComponent } from './components/mouse-move/mouse-move.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SimpleComponent,
    MouseMoveComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
