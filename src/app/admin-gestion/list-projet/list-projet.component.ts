import { ToastrService } from 'ngx-toastr';
import { ProjetService } from './../../service/projet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.css']
})
export class ListProjetComponent implements OnInit {

  projets: any = [];
  filterNom:any;
  config: any;
  constructor(private projetService: ProjetService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this.projetService.getAllprojets().subscribe(data => {

     this.projets = data;
     this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.projets.count
    };
     
   },err => {
     console.log(err) ;

   });

 }

 deleteProjet(id: number){
  this.projetService.deleteProjet(id).subscribe(data => {
    this.toastr.success('The project is successfully deleted');

    this.getProjects();
  });
}

pageChanged(event: any){
  this.config.currentPage = event;
}
}
