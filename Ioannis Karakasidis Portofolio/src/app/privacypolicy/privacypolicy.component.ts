import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LanguageService } from '../language.service';
import { DatenschutzerkarungComponent } from '../datenschutzerkarung/datenschutzerkarung.component';

@Component({
  selector: 'app-privacypolicy',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, DatenschutzerkarungComponent],
  templateUrl: './privacypolicy.component.html',
  styleUrl: './privacypolicy.component.scss',
})
export class PrivacypolicyComponent {
  isgerman = inject(LanguageService);
  email = 'gianniskarakasidhs@hotmail.com';
}
