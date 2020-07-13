import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  permiteNewsLetter = false;
  textoNewsLetter = 'você pode receber grandes descontos';
  email = 'teste@angular.com';
  emailEnviado = false;

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.permiteNewsLetter = true;
    }, 5000);
  }

  onSubmitNewsLetter() {
    this.textoNewsLetter = 'E-mail enviado';
    this.emailEnviado = true;
  }
  onEmailEnter(event: Event) {
    this.email = (<HTMLInputElement>event.target).value;
  }

  getCor() {
    if(this.emailEnviado) {
      return 'purple';
    } else {
      return 'Brown';
    }
  }
}
