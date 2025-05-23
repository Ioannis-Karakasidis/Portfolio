import { Component, inject } from '@angular/core';
import { LanguageService } from '../language.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-datenschutzerkarung',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './datenschutzerkarung.component.html',
  styleUrl: './datenschutzerkarung.component.scss',
})
export class DatenschutzerkarungComponent {
  isgerman = inject(LanguageService);
  email = 'gianniskarakasidhs@hotmail.com';
}
