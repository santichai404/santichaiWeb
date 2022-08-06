import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../shareds/components/footer/footer.component';
import { NavbarComponent } from '../shareds/components/navbar/navbar.component';
import { MeComponent } from './components/me/me.component';

const routes: Routes = [
  { path: '', redirectTo: 'me', pathMatch: 'full' },
  { path: '', component: NavbarComponent, outlet: 'navbar' },
  { path: '', component: FooterComponent, outlet: 'footer' },
  { path: 'me', component: MeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
