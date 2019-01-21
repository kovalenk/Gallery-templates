import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MasonrySt1Component} from "./components/galleries/masonry-st1/masonry-st1.component";
import {MasonrySt2Component} from "./components/galleries/masonry-st2/masonry-st2.component";

const routes: Routes = [
  {path: 'grid-1', component: MasonrySt1Component},
  {path: 'grid-2', component: MasonrySt2Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
