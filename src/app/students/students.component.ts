import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  students:any[] = [

    {
     id: 1,
     name: "Susan",
     country: "Canada"
 
    },
    {
     id: 2,
     name: "Smith",
     country: "The USA"
    },
    {
      id: 3,
      name: "Mayur",
      country: "India"
    }
 
 
 
   ]
}
