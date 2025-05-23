import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LanguageService } from '../language.service';
import { ImpressumComponent } from '../impressum/impressum.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  email = 'gianniskarakasidhs@hotmail.com';
  isgerman = inject(LanguageService);
}
