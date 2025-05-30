import { Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './sign-up/sign-up.component';
import { ForgotpasswordComponent } from './forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './reset-password/reset-password.component';
import { AvatarselectionComponent } from './avatar-selection/avatar-selection.component';
import { ContactbarComponent } from './contactbar/contactbar.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataprotectionComponent } from './data-protection/data-protection.component';
import { MainChatComponent } from './main-chat/main-chat.component';
import { ChatContentComponent } from './chat-channel/chat-channel.component';
import { ThreadComponent } from './chat-thread/chat-thread.component';
import { DirectmessagesComponent } from './chat-direct/chat-direct.component';
import { NewmessageComponent } from './chat-new-message/chat-new.component';

export const routes: Routes = [
  { path: '', component: MainComponentComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'avatarselection', component: AvatarselectionComponent },
  { path: 'contactbar', component: ContactbarComponent },
  { path: 'chat', component: MainChatComponent },
  { path: 'channel', component: ChatContentComponent },
  { path: 'direct', component: DirectmessagesComponent },
  { path: 'thread', component: ThreadComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'Dataprotection', component: DataprotectionComponent },
  { path: 'new-message', component: NewmessageComponent },
];
