import { TotalStaffService } from "./staff.service";
import { tick, fakeAsync } from "@angular/core/testing";

import { Observable } from "rxjs";

describe("Staff Service", () => {
  let service;

  beforeEach(() => {
    service = new TotalStaffService();
  });

  it(
    "test total staff",
    fakeAsync(() => {
      let count;
      service.calculateTotalStaff(3, 0).subscribe(result => (count = result));
      tick(100);
      expect(count).toEqual(15);
    })
  );
});
