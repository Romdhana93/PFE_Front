import { ToastrService } from 'ngx-toastr';
import { TestCaseService } from './../../../service/test-case.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-test-case',
  templateUrl: './list-test-case.component.html',
  styleUrls: ['./list-test-case.component.css']
})
export class ListTestCaseComponent implements OnInit {

  testCases: any = [];
  filterNom:any;

  config: any;

  constructor(private testCaseService: TestCaseService, private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.getTestCases();

  }

  getTestCases(){
    this.testCaseService.getAllTestCases().subscribe(data => {

     this.testCases = data;
     
     this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.testCases.count
    };
     
   },err => {
     console.log(err) ;

   });

 }

 deleteTestCase(id: number){
  this.testCaseService.deleteTestCase(id).subscribe(data => {
    this.toastr.success('The test case is successfully deleted');

    this.getTestCases();
  });
}

pageChanged(event: any){
  this.config.currentPage = event;
}

}
