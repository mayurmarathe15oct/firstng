import { Component } from '@angular/core';
import { Project } from '../interfaces/project';

@Component({
  selector: 'app-myprojects',
  standalone: true,
  imports: [],
  templateUrl: './myprojects.component.html',
  styleUrl: './myprojects.component.scss'
})
export class MyprojectsComponent {
   
  myprojects:Project[]=[
    {
      projectID: 1,
      projectTitle:"The Cakery",
      projectClient:"VanArts",
      projectDuration:"Three months",
      githubLink:"qwertyuiop",
      projectLink:"asdfghjkl",
      projectTools: "HTML, CSS, AdobeIllustrator"
    },
    {
      projectID: 2,
      projectTitle:"Week4 Term2",
      projectClient:"VanArts",
      projectDuration:"One Week",
      githubLink:"qwertyuiop",
      projectLink:"asdfghjkl",
      projectTools: "HTML, CSS, AdobeIllustrator"
    },
    {
      projectID: 3,
      projectTitle:"Week8 Term2",
      projectClient:"VanArts",
      projectDuration:"One Week",
      githubLink:"qwertyuiop",
      projectLink:"asdfghjkl",
      projectTools: "HTML, CSS, AdobeIllustrator"
    }
  ]
}
