import {Component} from '@angular/core';

@Component({
  selector: 'app-example5',
  styleUrls: ['example5.css'],
  template: ` <div [contentEditable]="isEditable"></div> `,
})
export class Example5 {
  isEditable = true;
}
