import {
  Component,
  ElementRef,
  HostListener,
  inject,
  Input,
  ViewChild,
} from '@angular/core';
import { HeaderlogoComponent } from '../headerlogo/headerlogo.component';
import { ContacticonsComponent } from '../contacticons/contacticons.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-herosection',
  standalone: true,
  imports: [HeaderlogoComponent, ContacticonsComponent, CommonModule],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.scss',
})
export class HerosectionComponent {
  windowWidth: number = window.innerWidth;
  path = 'assets/img/Vector 29-1.png';
  @ViewChild('imageprofile', { static: true })
  image!: ElementRef<HTMLImageElement>;
  @ViewChild('imagebox', { static: true })
  imagebox!: ElementRef<HTMLDivElement>;
  Isgerman = inject(LanguageService);
  showImage: boolean = true;
  @HostListener('window:resize', ['$event'])
  
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
  }

  ngOnInit() {
    this.windowWidth = window.innerWidth;
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
