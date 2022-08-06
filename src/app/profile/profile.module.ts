import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { MeComponent } from './components/me/me.component';
import { AboutComponent } from './components/about/about.component';
import { ExpComponent } from './components/exp/exp.component';
import { SkillComponent } from './components/skill/skill.component';
import { SharedsModule } from '../shareds/shareds.module';
@NgModule({
  declarations: [MeComponent, AboutComponent, ExpComponent, SkillComponent],
  imports: [CommonModule, ProfileRoutingModule, SharedsModule],
})
export class ProfileModule {}
