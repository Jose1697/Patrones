import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout.component';


const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [

      {
        path:'',
        redirectTo:'home',
        pathMatch:'full',
      },

      {
        path:'home',
        loadChildren:()=> import('./modules/inicio/inicio.module').then(m => m.InicioModule)
      }

    ]
  },
  
  {
    path:'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'**',
    loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
