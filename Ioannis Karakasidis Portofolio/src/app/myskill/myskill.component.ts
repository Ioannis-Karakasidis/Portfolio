import { Component, inject, Input } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-myskill',
  standalone: true,
  imports: [],
  templateUrl: './myskill.component.html',
  styleUrl: './myskill.component.scss',
})
export class MyskillComponent {
  isgerman = inject(LanguageService)
}
