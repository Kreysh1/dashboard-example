import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ChartComponent } from './components/chart/chart.component';
import { Charts2012Component } from './components/charts2012/charts2012.component';
import { Charts2006Component } from './components/charts2006/charts2006.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio/2021', pathMatch: 'full'},
  { path: 'inicio', component: NavigationComponent, children: [
    { path: '2021', component: ChartComponent},
    { path: '2012', component: Charts2012Component},
    { path: '2006', component: Charts2006Component},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
