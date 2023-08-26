import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3> Contador: {{ counter }} </h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter(10)">Reset</button>
    <button (click)="decreaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  increaseBy(value: number):void {
      this.counter += 1;
  }

  decreaseBy(value: number):void {
    this.counter -= 1;
  }

  resetCounter(value: number):void {
    this.counter = 10;
  }
}
