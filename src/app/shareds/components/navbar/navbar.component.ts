import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  introActive = false;
  aboutmeActive = false;
  workActive = false;
  skillActive = false;
  resumeActive = false;
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.onClick('intro');
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    if (elementId == 'intro') {
      this.introActive = true;
      this.skillActive = false;
      this.aboutmeActive = false;
      this.workActive = false;
      this.resumeActive = false;
    } else if (elementId == 'aboutme') {
      this.introActive = false;
      this.skillActive = false;
      this.aboutmeActive = true;
      this.workActive = false;
      this.resumeActive = false;
    } else if (elementId == 'work') {
      this.introActive = false;
      this.skillActive = false;
      this.aboutmeActive = false;
      this.workActive = true;
      this.resumeActive = false;
    } else if (elementId == 'skill') {
      this.introActive = false;
      this.skillActive = true;
      this.aboutmeActive = false;
      this.workActive = false;
      this.resumeActive = false;
    } else if (elementId == 'resume') {
      this.introActive = false;
      this.skillActive = false;
      this.workActive = false;
      this.workActive = false;
      this.resumeActive = true;
    } else {
      this.introActive = true;
      this.skillActive = false;
      this.workActive = false;
      this.workActive = false;
      this.resumeActive = false;
    }
  }
}
