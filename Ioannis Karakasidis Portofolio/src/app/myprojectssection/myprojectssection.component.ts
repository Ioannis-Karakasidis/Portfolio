import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../language.service';
type ProjectKey = 'Join' | 'ElPocoLoco' | 'DaBubble';

@Component({
  selector: 'app-myprojectssection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myprojectssection.component.html',
  styleUrl: './myprojectssection.component.scss',
})
export class MyprojectssectionComponent {
  activeProject: ProjectKey = 'Join';
  information = inject(LanguageService);
  showactiveclass($event: MouseEvent, projectId: ProjectKey): void {
    setTimeout(() => {
      this.activeProject = projectId;
    }, 250);
  }
}
