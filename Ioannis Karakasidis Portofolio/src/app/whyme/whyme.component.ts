import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-whyme',
  standalone: true,
  imports: [],
  templateUrl: './whyme.component.html',
  styleUrl: './whyme.component.scss',
})
export class WhymeComponent {
  isgerman = inject(LanguageService);
}
