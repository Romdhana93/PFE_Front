import { ProjetService } from './../../service/projet.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projets: any = [];
  filterNom:any;

  config: any;

  constructor(private projetService: ProjetService, private readonly router:Router, private readonly route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProjects();
  }

  navigateToItem(id: number){
    this.router.navigate(['/home/testCaseP',id]);
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

 pageChanged(event: any){
  this.config.currentPage = event;
}

}
