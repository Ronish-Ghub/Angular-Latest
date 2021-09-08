import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OpenCloseComponent} from './open-close/open-close.component'
import {ImageComponent} from './image/image.component'
const routes: Routes = [{ path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
{path: '',component:ImageComponent,data:{animation:"HomePage"}},
{path:'user',component:ImageComponent,data:{animation:'FilterPage'}},
{path: 'open',component:OpenCloseComponent,data:{animation:"AboutPage"}}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }