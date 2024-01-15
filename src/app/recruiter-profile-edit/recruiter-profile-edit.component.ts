import { Component, OnInit } from '@angular/core';
import { RecruiterServiceService } from '../Recruiter-Services/recruiter-service.service';

@Component({
  selector: 'app-recruiter-profile-edit',
  templateUrl: './recruiter-profile-edit.component.html',
  styleUrls: ['./recruiter-profile-edit.component.css']
})
export class RecruiterProfileEditComponent {
 

  constructor(private Recruiter: RecruiterServiceService) { }


  email1!: any;


  ngOnInit() {
    this.email1 = sessionStorage.getItem("RecruiterEmail")
    this.recruiter_get_data();
  }




  myData!: any;
  recruiterinfo!: any


  recruiter_get_data() {


    this.Recruiter.recruiter_details(this.email1).subscribe((data) => {
      this.myData = data;
      console.log(data)

      if (Array.isArray(this.myData)) {
        
        let firstValue = this.myData[0];
        this.recruiterinfo = firstValue;


      } else {

        console.log("recruiterdata is not an array or is undefined");

      }


    })

  }

}
