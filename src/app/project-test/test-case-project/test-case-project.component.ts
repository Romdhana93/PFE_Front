import { ToastrService } from 'ngx-toastr';
import { TestCaseService } from 'src/app/service/test-case.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestCase } from 'src/app/model/TestCase';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-test-case-project',
  templateUrl: './test-case-project.component.html',
  styleUrls: ['./test-case-project.component.css']
})
export class TestCaseProjectComponent implements OnInit {
 
  config: any;
  filterNom:any;

  Tests: any = [];
  dates: Date[] = [];
  constructor(private testCaseService : TestCaseService, private route: ActivatedRoute,private spinner: NgxSpinnerService ,private toastr: ToastrService ) { }

  
  ngOnInit(): void {
    this.getTests();

  }

  getTests(){
    const idProject = this.route.snapshot.paramMap.get('id') ? Number(this.route.snapshot.paramMap.get('id')): 1 ;
    this.testCaseService.getTestCasesByProjet(idProject).subscribe(data => {

     this.Tests = data;
     this.Tests.forEach((element:any) => {
       const date = element.scheduleAt ? element.scheduleAt : new Date();
       this.dates.push(date);
     });
     
     this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.Tests.count
    };
   
   },err => {
     console.log(err) ;

   });

 }

 runTest(testCase:any){
 
  this.testCaseService.runTestCase(testCase).subscribe(data =>{
    
    console.log(data);
   
  },err => {
    console.log(err) ;

  });
  this.spinner.show();
  setTimeout(() => { this.spinner.hide();}, 70000);
  this.toastr.success('The test case is successfully runned');


}
runScheduleTest(testCase:any,index:number){

  const date =new Date(this.dates[index]).toISOString().replace('Z','');
 this.testCaseService.runScheduleTestCase({testCasePath:testCase.testCasePath,testCaseName:testCase.testCaseName,scheduleAt:date}).subscribe(data =>{
   console.log(data);
   
 },err => {
   console.log(err) ;

 });
 this.toastr.success('The test case is successfully runned');

}
 
pageChanged(event: any){
  this.config.currentPage = event;
}

goToLink(url: string){
  window.open(url, "_blank");
}

}
