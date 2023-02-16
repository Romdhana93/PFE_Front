import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ProjetService } from './../../service/projet.service';
import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/model/Projet';

@Component({
  selector: 'app-gestion-projet',
  templateUrl: './gestion-projet.component.html',
  styleUrls: ['./gestion-projet.component.css']
})
export class GestionProjetComponent implements OnInit {


  projectForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  submitted = false;


 

  constructor( private projetService : ProjetService ,private toastr: ToastrService ) { }

  
  

  ngOnInit(): void {
  }

  get f(){
    return this.projectForm.controls;
  }
  


  addProjet(){
    this.submitted = true
    this.projetService.addProjet(this.projectForm.value).subscribe(data =>{
      console.log(data);
      this.toastr.success('The Project is successfully added');
    },(error) => {
      console.log(error) ;
 
    },() => {
      this.submitted = false;

    } );
  }
    
  }


