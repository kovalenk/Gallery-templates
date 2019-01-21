import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MasonrySt1Component} from "./components/galleries/masonry-st1/masonry-st1.component";

const routes: Routes = [
  {path: 'wedding', component: MasonrySt1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
