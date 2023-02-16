import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProjetService } from './../../../service/projet.service';
import { TestCaseService } from 'src/app/service/test-case.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-test-case',
  templateUrl: './edit-test-case.component.html',
  styleUrls: ['./edit-test-case.component.css']
})
export class EditTestCaseComponent implements OnInit {
  testCaseForm = new FormGroup({
    testCaseName: new FormControl('', Validators.required),
    testCasePath: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    projet:new FormGroup({
      id: new FormControl(['', Validators.required])
    })
  });

  projects: any = [];
  tests: any = [];

  submitted = false;
 
  idTest: String;


  constructor( private testCaseService: TestCaseService , private projetService: ProjetService,private router: Router, private toastr: ToastrService ,private activateRoute: ActivatedRoute) {
    this.getProjets();
    console.log(activateRoute.snapshot.params['id ']);
    console.log('**********1');
    this.idTest = this.activateRoute.snapshot.paramMap.get('id') || '0';
   }

  ngOnInit(): void {
    this.testCaseService.getTestCaseById(this.idTest).subscribe(data => {
      console.log(data);

    },
    err => {
      console.log(err);
    });
  }

  get f(): any {
    return this.testCaseForm.controls;
  }


  updateTestCase(){
    console.group('====< ', this.testCaseForm);
    this.submitted = true;
    this.testCaseService.updateTestCase(this.idTest,this.testCaseForm.value).subscribe(data =>{
      console.log(data);
      this.toastr.success('The test case is successfully updated');
      this.router.navigate(['/home/listeTestCase']);

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