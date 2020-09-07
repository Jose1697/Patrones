import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
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
      },

      {
        path:'destinos',
        loadChildren:() => import('./modules/destinos/destinos.module').then(m => m.DestinosModule)
      },

    ]
  },
  
  {
    path:'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
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
