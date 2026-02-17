import { Component } from '@angular/core';
import { Example1 } from './example1/example1';
import { Example2 } from './example2/example2';
import { Example3 } from './example3/example3';
import { Example4 } from './example4/example4';
import { Example5 } from './example5/example5';
import { Example6 } from './example6/example6';
import { Example7 } from './example7/example7';
import { Example8 } from './example8/example8';
import { Example9 } from './example9/example9';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Example1, 
    Example2, 
    Example3, 
    Example4, 
    Example5,
    Example6,
    Example7,
    Example8,
    Example9
  ],
  template: `
    <app-example1></app-example1>
    <br>
    <app-example2></app-example2>
    <br>
    <app-example3></app-example3>
    <br>
    <app-example4></app-example4>
    <br>
    <app-example5></app-example5>
    <br>
    <app-example6></app-example6>
     <br>
    <app-example7></app-example7>
     <br>
    <app-example8></app-example8>
     <br>
    <app-example9></app-example9>
  

  `,
})
export class App {}