import {Component} from '@angular/core';

@Component({
  selector: 'app-example2',
  template: ` Hello {{ city }}, {{ 1 + 1 }} `,
})
export class Example2 {
  city = 'San Francisco';
}
