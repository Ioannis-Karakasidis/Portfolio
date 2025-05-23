import { Component, EventEmitter, inject, Output } from '@angular/core';
import { HeaderlogoComponent } from '../headerlogo/headerlogo.component';
import { LanguageService } from '../language.service';
import { HerosectionComponent } from '../herosection/herosection.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderlogoComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  languageService = inject(LanguageService);
  activeLink = '';

  setActive(link: string) {
    this.activeLink = link;
  }
}
