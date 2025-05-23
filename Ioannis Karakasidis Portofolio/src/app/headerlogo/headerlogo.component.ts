import { Component, inject, Input } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-headerlogo',
  standalone: true,
  imports: [],
  templateUrl: './headerlogo.component.html',
  styleUrl: './headerlogo.component.scss',
})
export class HeaderlogoComponent {
  isgerman = inject(LanguageService);
  @Input() path: any;
}
