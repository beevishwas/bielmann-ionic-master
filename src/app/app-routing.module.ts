import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'flashcard', loadChildren: './flashcard/flashcard.module#FlashcardPageModule' },
  { path: 'pointofsale', loadChildren: './pointofsale/pointofsale.module#PointofsalePageModule' },
  { path: 'todo', loadChildren: './todo/todo.module#TodoPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
