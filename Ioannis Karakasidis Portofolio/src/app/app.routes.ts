import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { DatenschutzerkarungComponent } from './datenschutzerkarung/datenschutzerkarung.component';

export const routes: Routes = [
  { path: '', component: MaincomponentComponent },
  { path: 'Imprint', component: ImprintComponent },
  { path: 'Impressum', component: ImpressumComponent },
  { path: 'Privacypolicy', component: PrivacypolicyComponent },
  { path: 'Datenschutz', component: DatenschutzerkarungComponent },
];
