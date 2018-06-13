import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  //templateUrl: './test.component.html',
  template: `
    <h2>{{ name }}</h2>
    <h3>{{ 2+2 }}</h3>
    <h3>{{ "Msj:" + msj }}</h3>
    <h3>{{ msj.length }}</h3>
    <h3>{{ msj.toUpperCase() }}</h3>
    <h3>{{ greetUser() }}</h3>
    <h3>{{ siteUrl }}</h3>
  `,
  //styleUrls: ['./test.component.css'],
  styles: [
    `
      div {
        color: red;
      }
    `
  ]
})
export class TestComponent implements OnInit {
  public name = 'I am Component Test';
  public msj = 'Hola Worl';
  public user = 'Jonathan Duran';
  public siteUrl = window.location.href;
  constructor() {}

  ngOnInit() {}

  greetUser() {
    return 'Hello ' + this.user;
  }
}
