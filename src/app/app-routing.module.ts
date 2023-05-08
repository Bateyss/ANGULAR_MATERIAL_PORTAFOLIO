import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: ToolsComponent, },
  // {
  //   path: 'first-component',
  //   title: 'First component',
  //   component: FirstComponent,  // this is the component with the <router-outlet> in the template
  //   children: [
  //     {
  //       path: 'child-a',  // child route path
  //       title: resolvedChildATitle,
  //       component: ChildAComponent,  // child route component that the router renders
  //     },
  //     {
  //       path: 'child-b',
  //       title: 'child b',
  //       component: ChildBComponent,  // another child route component that the router renders
  //     }
  //   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
