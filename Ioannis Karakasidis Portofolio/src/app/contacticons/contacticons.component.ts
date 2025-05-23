import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contacticons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacticons.component.html',
  styleUrl: './contacticons.component.scss',
})
export class ContacticonsComponent {
  @Input() path: any;
  @Input() customClass!: string;
}
