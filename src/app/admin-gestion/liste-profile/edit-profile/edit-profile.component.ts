import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user: any = {};
// tslint:disable-next-line:ban-types
idUser: String;

  constructor(private userService: UserService , private activateRoute: ActivatedRoute, private router: Router,private toastr: ToastrService) {
    console.log(activateRoute.snapshot.params['id ']);
    console.log('**********1');
    this.idUser = this.activateRoute.snapshot.paramMap.get('id') || '0';
  }

  ngOnInit(): void {
    this.userService.getUserById(this.idUser).subscribe(data => {
      this.user = data;
      console.log(data);

    },
    err => {
      console.log(err);
    });
  }

  // tslint:disable-next-line:typedef
  updateUser(){
    this.userService.UpdateUser(this.idUser, this.user).subscribe(data => {

      console.log(data);
      this.toastr.success('The user is successfully updated');

      this.router.navigate(['/home/listProfil']);

    },
    err => {
      console.log(err);
    });
  }

}
