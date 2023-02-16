import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TestCaseService } from 'src/app/service/test-case.service';
import { RoleService } from './../../service/role.service';
import { User } from './../../model/user';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {

user: User = new User ();
username: any;
email: any;
password: any;
role: any;

roles: any = [];

  constructor(private userService: UserService , private roleService: RoleService,private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getRoles();
  }
  update( event : any ){
    this.role = event.target.value;
  }

  addUser(): void {
    console.log("this.username");

    console.log(this.username);
    console.log(this.email);
    console.log(this.password);
    console.log(this.role);
    
    this.userService.register(this.username, this.email, this.password, [this.role]).subscribe(
      data => {
        console.log(data);
        console.log('------');
        console.log(this.role);
        this.router.navigate(['/home/listProfil']);

        this.toastr.success('The user is successfully added');
        
      },
      err => {
        console.log(err) ;
        this.toastr.error('The username or the email is already exist');

      }
    );

  }

  getRoles(){
    this.roleService.getAllroles().subscribe(data => {
      this.roles = data;
      console.log(this.roles) ;

   }, err => {
     console.log(err) ;

   });

 }
 
}
