import { Component, inject, Input } from '@angular/core';
import { HeaderlogoComponent } from '../headerlogo/headerlogo.component';
import { ContacticonsComponent } from '../contacticons/contacticons.component';
import { LanguageService } from '../language.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [HeaderlogoComponent, ContacticonsComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  isgerman = inject(LanguageService);
}
