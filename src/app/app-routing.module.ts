import { RouterModule, Routes } from '@angular/router';

import { AngularngComponent } from './angularng/angularng.component';
import { CsharpComponent } from './csharp/csharp.component';
import { DotnetcoreComponent } from './dotnetcore/dotnetcore.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'csharp', component: CsharpComponent },
  { path: 'dotnetcore', component: DotnetcoreComponent },
  { path: 'angular', component: AngularngComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
