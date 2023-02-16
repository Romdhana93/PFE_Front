import { ToastrService } from 'ngx-toastr';
import { User } from '../../../model/user';
import { Observable } from 'rxjs';
import { UserService } from '../../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-profile',
  templateUrl: './liste-profile.component.html',
  styleUrls: ['./liste-profile.component.css']
})
export class ListeProfileComponent implements OnInit {

  users: any = [];
  filterNom:any;

  constructor(private userService: UserService,private toastr: ToastrService) { }

  config: any;


  ngOnInit(): void {
    this.getUsers();
    console.log(this.getUsers());

  }
  // tslint:disable-next-line:typedef
  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(data => {
      this.toastr.success('The user is successfully deleted');
      this.getUsers();
    });
  }

  // tslint:disable-next-line:typedef
  getUsers(){
     this.userService.getAllUsers().subscribe(data => {

      this.users = data;
      
      this.config = {
        itemsPerPage: 4,
        currentPage: 1,
        totalItems: this.users.count
      };
    }, err => {
      console.log(err) ;

    });

  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }
}
