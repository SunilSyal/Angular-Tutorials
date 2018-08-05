import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})

export class SchoolComponent implements OnInit {

  // Fetches the value passed to the component
  @Input() name;
  @Input() totalClasses;

  constructor() { 
    // Executes when the object is instantiated - JS controls it.
    this.name = "Good School";
  }

  ngOnInit() {
    // Executes when the component is intiated - Angular controls it.
    //this.name = "Great School"
  }

}
