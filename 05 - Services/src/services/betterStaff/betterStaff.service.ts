import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class TotalBetterStaffService {

  calculateTotalStaff(classesCount: number) {

    return new Observable(observer => {
        setTimeout(() => {
          observer.next({
            totalCount: classesCount * 10
          });
        }, 3000);
    });
  }

}
