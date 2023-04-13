import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainComponent } from './components/main/main.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { BoardComponent } from './components/board/board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WelcomeComponent } from './components/homepage/welcome/welcome.component';
import { ProjectInfoComponent } from './components/homepage/project-info/project-info.component';
import { CoursesComponent } from './components/homepage/courses/courses.component';
import { AboutMeComponent } from './components/homepage/about-me/about-me.component';

@NgModule({
  declarations: [
    HomepageComponent,
    NotFoundComponent,
    MainComponent,
    BoardComponent,
    WelcomeComponent,
    ProjectInfoComponent,
    CoursesComponent,
    AboutMeComponent,
  ],
  exports: [HomepageComponent, NotFoundComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    DragDropModule,
    TranslateModule,
  ],
})
export class PagesModule {}
