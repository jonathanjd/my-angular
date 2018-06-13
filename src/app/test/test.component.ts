import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  //templateUrl: './test.component.html',
  template: `
    <div>Hola JDDS</div>
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
  constructor() {}

  ngOnInit() {}
}
