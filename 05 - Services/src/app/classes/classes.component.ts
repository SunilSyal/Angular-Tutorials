import { Component, OnInit, Input } from "@angular/core";
import { TotalStaffService } from "../../services/staff/staff.service";
import { TotalBetterStaffService } from "../../services/betterStaff/betterStaff.service";

// Decorator
@Component({
  selector: "app-classes",
  templateUrl: "./classes.component.html",
  styleUrls: ["./classes.component.scss"]
})
export class ClassesComponent implements OnInit {
  @Input() totalClasses;

  // Public properties
  categories = ["primary", "middle School"];
  totalTeachers;
  totalBetterTeachers;

  constructor(private totalBetterStaffService: TotalBetterStaffService) {
    // This property is overridden by the input value
    this.totalClasses = 5;

    let totalStaffService = new TotalStaffService();

    totalStaffService
      .calculateTotalStaff(this.totalClasses, 3000)
      .subscribe(value => (this.totalTeachers = value));

    totalBetterStaffService
      .calculateTotalStaff(this.totalClasses)
      .subscribe(value => {
        this.totalBetterTeachers = value.totalCount
      });

    /* Uncomment this code to know how unsubscribe works
      if(value >= 1) {
        subs.unsubscribe();
      }
      */
  }

  ngOnInit() {}

  ngOnViewInit() {
    if (!this.totalClasses) {
      this.totalClasses = 13;
    }
  }

  getCategories() {
    return this.categories;
  }

  getLinkName(str) {
    return str.split(" ").join("");
  }
}
