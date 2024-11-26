import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    AppFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    AppFooterComponent
  ]
})
export class SharedComponentsModule {}
