import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HerosectionComponent } from '../herosection/herosection.component';
import { WhymeComponent } from '../whyme/whyme.component';
import { MyskillComponent } from '../myskill/myskill.component';
import { ReferencesComponent } from '../references/references.component';
import { ContactsectionComponent } from '../contactsection/contactsection.component';
import { MyprojectssectionComponent } from '../myprojectssection/myprojectssection.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-maincomponent',
  standalone: true,
  imports: [
    HerosectionComponent,
    HeaderComponent,
    WhymeComponent,
    MyskillComponent,
    ReferencesComponent,
    ContactsectionComponent,
    MyprojectssectionComponent,
    FooterComponent,
  ],
  templateUrl: './maincomponent.component.html',
  styleUrl: './maincomponent.component.scss',
})
export class MaincomponentComponent {}
