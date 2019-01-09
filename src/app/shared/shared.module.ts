import {NgModule} from '@angular/core';
import {SvgComponent} from './components/svg/svg.component';
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';


@NgModule({
  imports: [],
  exports: [
    SvgComponent,
    SvgDefinitionsComponent
  ],
  declarations: [
    SvgComponent,
    SvgDefinitionsComponent
  ],
})

export class SharedModule {
}
