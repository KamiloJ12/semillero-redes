import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MembersComponent } from './pages/members/members.component';
import { EventsComponent } from './pages/events/events.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { MainComponent } from './pages/main/main.component';
import { MiembroCardComponent } from './components/miembro-card/miembro-card.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    FooterComponent,
    MembersComponent,
    EventsComponent,
    ProjectsComponent,
    MainComponent,
    MiembroCardComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PrimeNgModule
  ]
})
export class PublicModule { }
