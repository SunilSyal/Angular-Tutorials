import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolComponent } from './school/school.component';
import { OfficeComponent } from './office/office.component';

//This is my case 
const routes: Routes = [
    {
        path: '',
        component: SchoolComponent
    },
    {
        path: 'school',
        component: SchoolComponent
    },
    { 
        path: 'school/:id', component: SchoolComponent 
    },
    {
        path: 'office',
        component: OfficeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }