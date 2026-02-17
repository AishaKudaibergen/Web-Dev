import {Component} from '@angular/core';

@Component({
  selector: 'app-example6',
  template: `
    <section (mouseover)="showSecretMessage()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>
  `,
})
export class Example6 {
  message = '';

  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }
}
