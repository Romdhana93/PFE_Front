import { Router } from '@angular/router';
import { TokenStorageService } from './../service/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-component',
  templateUrl: './shared-component.component.html',
  styleUrls: ['./shared-component.component.css']
})
export class SharedComponentComponent implements OnInit {

  user: any;
  roles!: string[];
  canAccess = false;

  constructor(private tokenStorageService: TokenStorageService , private router : Router) { }

  ngOnInit(): void {
    this.user = this.tokenStorageService.getUser();
    this.roles = this.user.roles;
    console.log('roles ', this.roles);
    this.canAccess = this.roles.includes('Admin');
    console.log('canAccess ',this.canAccess)
  }

  logout(){
    this.tokenStorageService.signOut();
    this.router.navigate (['/login']);
  }

}
