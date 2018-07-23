import { Component, OnInit } from '@angular/core';
import {CourseService} from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers:[CourseService]
})
export class CourseComponent implements OnInit {
  courseTitle ="WebXML";
  courses;

    constructor(courseService:CourseService) { 

      this.courses=courseService.getCourses();
    }

  ngOnInit() {
  }

}
