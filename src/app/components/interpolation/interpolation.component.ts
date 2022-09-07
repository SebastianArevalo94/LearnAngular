import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.sass'],
})
export class InterpolationComponent implements OnInit {
  name: string = 'Sebastian';
  age: number = 19;
  
  constructor() {}

  ngOnInit(): void {}
}
