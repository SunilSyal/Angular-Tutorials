import { Component, OnInit, Input } from '@angular/core';

// Decorator 
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})

export class ClassesComponent implements OnInit {

  @Input() totalClasses;
  
  // Public properties
  categories = ['primary', 'middle School'];

  constructor() {
    // This property is overridden by the input value
    this.totalClasses = 5;
  }

  ngOnInit() {
    if(!this.totalClasses) {
      this.totalClasses = 13;
    }
  }

  getCategories () {
    return this.categories;
  }

  getLinkName (str) {
    return str.split(' ').join('');
  }

}
