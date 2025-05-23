import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ImprintComponent } from '../imprint/imprint.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss',
})
export class ImpressumComponent {
  email = 'gianniskarakasidhs@htomail.com';
  isgerman = inject(LanguageService);
}
