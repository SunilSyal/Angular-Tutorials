import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})

export class SchoolComponent implements OnInit {

  // Fetches the value passed to the component
  @Input() name;
  @Input() totalClasses;
  schools = ['ABC', 'XYZ', 'RST'];
  selectedItem;

  constructor(private route: ActivatedRoute, private eleRef: ElementRef) { 
    route.params.subscribe(params => {
      // Read the route param "id" 
      this.name = params['id'];
    });
  }

  ngOnInit() {
    // Executes when the component is intiated - Angular controls it.
    //this.name = "Great School"
    if (!this.name) {
      this.selectedItem = this.schools[0];
    }
  }

  ngAfterViewInit () {
    if (!this.name) {
      // This won't work in ngOnInit
      let smallBox = this.eleRef.nativeElement.querySelector('button');
        //.querySelector('button'); 
        smallBox.dispatchEvent(new Event('click'));
    }
  }

  setSelectedSchool (item) {
    this.selectedItem = item;
  }

}
