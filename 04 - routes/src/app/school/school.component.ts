import { Component, OnInit, Input } from '@angular/core';
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
  schools = ['ABC', 'XYZ', 'RST']

  constructor(private route: ActivatedRoute) { 
    route.params.subscribe(params => { 
      this.name = params['id'];
    });
  }

  ngOnInit() {
    // Executes when the component is intiated - Angular controls it.
    //this.name = "Great School"
  }

}
