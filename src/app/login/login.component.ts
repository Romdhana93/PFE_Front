import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from './../service/token-storage.service';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username: any;
    password: any;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, public router: Router ,private toastr: ToastrService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {

    this.authService.login(this.username, this. password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['/home']);

      },
      err => {
        this.toastr.error('The username or the password is incorrect');
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;

      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
