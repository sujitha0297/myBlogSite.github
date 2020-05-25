import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddBlogComponent } from './add-blog/add-blog.component';


const routes: Routes = [
  {
    path:"",
    component:HomepageComponent
  },
  {
    path:"add-blog",
    component:AddBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
