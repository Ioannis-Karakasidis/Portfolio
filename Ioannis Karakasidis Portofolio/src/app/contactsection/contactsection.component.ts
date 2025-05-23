import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../language.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contactsection',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './contactsection.component.html',
  styleUrls: ['./contactsection.component.scss'],
})
export class ContactsectionComponent {
  clickedtimes = 0;
  clicked = false;
  Checked = false;
  error = false;
  width = '85%';
  http = inject(HttpClient);
  Email: string = 'gianniskarakasidhs@hotmail.com';
  isgerman = inject(LanguageService);

  @ViewChild('overlay') overlay!: ElementRef;
  @ViewChild('sendbutton') sendbuttons!: ElementRef;

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://ioanniskarakasidis.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.clicked) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log('Mail sent successfully:', response);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            ngForm.resetForm();
            this.overlay.nativeElement.style.display = 'flex';
            this.Checked = false;
            this.clicked = false;
            this.clickedtimes = 0;
            this.error = false;
            setTimeout(() => {
              this.overlay.nativeElement.style.display = 'none';
            }, 1000);
          },
        });
    } else {
      this.clicked = true;
      if(!this.Checked){
        this.error = true;

      }
    }
  }

  changepic() {
    if (!this.Checked) {
      this.Checked = true;
      this.clicked = false;
      this.error = false;
      this.clickedtimes++;
      this.sendbuttons.nativeElement.classList.add('active');
    } else {
      this.Checked = false;
      this.clicked = false;
      this.sendbuttons.nativeElement.classList.remove('active');
    }
  }
}
