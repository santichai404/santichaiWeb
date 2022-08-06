import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [NavbarComponent, FooterComponent, ContentComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent, ContentComponent],
})
export class SharedsModule {}
