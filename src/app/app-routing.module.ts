import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MasonrySt1Component} from "./components/galleries/masonry-st1/masonry-st1.component";
import {MasonrySt2Component} from "./components/galleries/masonry-st2/masonry-st2.component";
import {MasonrySt3Component} from "./components/galleries/masonry-st3/masonry-st3.component";
import {MasonrySt4Component} from "./components/galleries/masonry-st4/masonry-st4.component";
import {GridSt1Component} from "./components/galleries/grid-st1/grid-st1.component";
import {GridSt2Component} from "./components/galleries/grid-st2/grid-st2.component";

const routes: Routes = [
  {path: 'grid-1', component: MasonrySt1Component},
  {path: 'grid-2', component: MasonrySt2Component},
  {path: 'grid-3', component: MasonrySt3Component},
  {path: 'grid-4', component: MasonrySt4Component},
  {path: 'grid-5', component: GridSt1Component},
  {path: 'grid-6', component: GridSt2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
