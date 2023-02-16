import { ProjetService } from './../../../service/projet.service';
import { TestCase } from './../../../model/TestCase';
import { Component, OnInit } from '@angular/core';
import { TestCaseService } from 'src/app/service/test-case.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Projet } from 'src/app/model/Projet';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-test-case',
  templateUrl: './add-test-case.component.html',
  styleUrls: ['./add-test-case.component.css']
})
export class AddTestCaseComponent implements OnInit {

  testCaseForm = new FormGroup({
    testCaseName: new FormControl('', Validators.required),
    testCasePath: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    projet:new FormGroup({
      id: new FormControl(['', Validators.required])
    })
  });

  projects: any = [];
  submitted = false;
 


  constructor( private testCaseService: TestCaseService , private projetService: ProjetService, private toastr: ToastrService ) {
    this.getProjets();
   }

  ngOnInit(): void {
    
  }

  get f(): any {
    return this.testCaseForm.controls;
  }


  addTestCase(){
    console.group('====< ', this.testCaseForm);
    this.submitted = true;
    this.testCaseService.addTestCase(this.testCaseForm.value).subscribe(data =>{
      console.log(data);
      this.toastr.success('The testcase is successfully added');
    },(error) => {
      console.log(error) ;
 
    },() => {
      this.submitted = false;

    } );
  }

  getProjets(){

     this.projetService.getAllprojets().subscribe(data => {
      this.projects= data.filter(d => d.name)
    })
 
  }

}
