import { Component, inject } from '@angular/core';
import { LanguageService } from '../language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent {
  isgerman = inject(LanguageService);
  reference = [
    {
      title: 'T. Sabanovic',
      project: 'Join',
      description:
        'Ioannis was a very reliable team member. What I particularly appreciated was how he always brought new ideas and quickly found solutions. Whenever tasks were assigned to him, he completed them reliably. Working with him was highly productive.',
      link: 'https://www.linkedin.com/in/tarik-sabanovic-70410134b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      title: 'Maik Joe Sedlmaier',
      project: 'Join',
      description:
        'Ioannis is a highly skilled developer with a strong focus on frontend development and user experience. His creativity, attention to detail, and ability to translate complex ideas into intuitive designs set him apart. Ioannis is a reliable and innovative team player who always delivers exceptional work.',
      link: 'https://www.linkedin.com/in/maik-joe-sedlmaier-55a898342/',
    },
  ];

  german = [
    {
      title: 'T. Sabanovic',
      project: 'Join',
      description:
        'Ioannis war ein sehr zuverlässiges Teammitglied. Besonders geschätzt habe ich, wie er immer neue Ideen einbrachte und schnell Lösungen fand. Wann immer Aufgaben ihm zugewiesen wurden, erledigte er sie zuverlässig. Die Zusammenarbeit mit ihm war sehr produktiv.',
      link: 'https://www.linkedin.com/in/tarik-sabanovic-70410134b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      title: 'Maik Joe Sedlmaier',
      project: 'Join',
      description:
        'Ioannis ist ein sehr fähiger Entwickler mit einem starken Fokus auf Frontend-Entwicklung und Benutzererfahrung. Seine Kreativität, Detailgenauigkeit und die Fähigkeit, komplexe Ideen in intuitive Designs umzusetzen, heben ihn hervor. Ioannis ist ein zuverlässiger und innovativer Teamplayer, der immer außergewöhnliche Arbeit liefert.',
      link: 'https://www.linkedin.com/in/maik-joe-sedlmaier-55a898342/',
    },
  ];
}
