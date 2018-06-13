import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  //templateUrl: './test.component.html',
  template: `
    <h2>Interpolacion</h2>
    <h2>{{ name }}</h2>
    <h3>{{ 2+2 }}</h3>
    <h3>{{ "Msj:" + msj }}</h3>
    <h3>{{ msj.length }}</h3>
    <h3>{{ msj.toUpperCase() }}</h3>
    <h3>{{ greetUser() }}</h3>
    <h3>{{ siteUrl }}</h3>
    <hr>
    <h2>Biding</h2>
    <input [id]="myId" type="test" value="My Title">
    <input [disabled]="true" [id]="myId" type="test" value="My Title">
    <hr>
    <h2>Class Biding</h2>

    <h2 class="text-success">My Angular</h2>

    <h2 [class]="successClass">My Angular</h2>

    <h2 class="text-special" [class]="successClass">My Angular</h2>

    <h2 [class.text-danger]="hasError">My Angular</h2>

    <h2 [ngClass]="messageClasses">My Angular</h2>



  `,
  //styleUrls: ['./test.component.css'],
  styles: [
    `
      div {
        color: red;
      }

      .text-success {
        color: green;
      }

      .text-danger {
        color: red;
      }

      .text-special {
        font-style: italic;
      }
    `
  ]
})
export class TestComponent implements OnInit {
  public name = 'I am Component Test';
  public msj = 'Hola Worl';
  public user = 'Jonathan Duran';
  public siteUrl = window.location.href;
  public myId = 'testId';
  public successClass = 'text-success';
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  };

  constructor() {}

  ngOnInit() {}

  greetUser() {
    return 'Hello ' + this.user;
  }
}
