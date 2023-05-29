import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MembersComponent } from './pages/members/members.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EventsComponent } from './pages/events/events.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { 
    path: '', 
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'miembros', component: MembersComponent},
      { path: 'proyectos', component: ProjectsComponent },
      { path: 'eventos', component: EventsComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
