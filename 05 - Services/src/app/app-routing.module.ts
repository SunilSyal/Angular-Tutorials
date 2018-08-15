import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolComponent } from './school/school.component';
import { OfficeComponent } from './office/office.component';
import { PrimaryComponent } from './primary/primary.component';
import { MiddleSchoolComponent } from './middle-school/middle-school.component';

//This is my case 
const routes: Routes = [
    {
        // Use of redirection to a different path
        path: '',
        redirectTo: '/school',
        pathMatch: 'full'
    },
    {
        path: 'school',
        component: SchoolComponent
    },
    { 
        // Using route parameter
        path: 'school/:id', component: SchoolComponent,
        children: [
            {
                path: 'primary', component: PrimaryComponent
            },
            {
                path: 'middleSchool', component: MiddleSchoolComponent
            }
          ]
    },
    {
        path: 'office',
        component: OfficeComponent
    },
    { 
        path: '**', 
        redirectTo: '/' 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }