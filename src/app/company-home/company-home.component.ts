import { Component, OnInit } from '@angular/core';
import { RecruiterServiceService } from '../Recruiter-Services/recruiter-service.service';
import { Router } from '@angular/router';
import { CompanyServiceService } from '../company-services/company-service.service';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent implements OnInit {

  constructor(private router:Router,public Recuiter:RecruiterServiceService,public company:CompanyServiceService){}

ngOnInit() {
  this.Company_details()
}

  companyId:number=0

  Company_details(){
    this.company.companyDetailsGet_service().subscribe((data:any)=>{
      sessionStorage.setItem("cid",data[0].cid)
      // console.log(data)
      // console.log(this.companyId)
    })
  }
  




  logOut_company(){
    this.router.navigate(["/"]);
    sessionStorage.removeItem("cid")
    sessionStorage.removeItem("CompanyLogin")
  }




}
