import { Observable } from 'rxjs';

export class TotalStaffService {
  constructor() {}

  calculateTotalStaff(classesCount: number, nextTick: number) {

    return new Observable(observer => {
        setTimeout(() => {
          observer.next(classesCount * 5);
        }, nextTick);
    });
  }

}
