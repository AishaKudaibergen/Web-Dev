import { Component } from '@angular/core';

@Component({
  selector: 'app-example1',
  standalone: true,
  template: `Hello Universe`,
  styles: `
  :host{
  color:#a144eb;
  }
  `,
})
export class Example1{}