import { Component, OnInit } from '@angular/core';

// Decorator 
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})

export class ClassesComponent implements OnInit {

  // Public properties
  totalClasses = 10;
  categories = ['primary', 'middle School']

  constructor() { }

  ngOnInit() {
  }

}
