import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import {Users} from '../models/users-model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersData: Users;
  userError: boolean;
  userLoading: boolean;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData() {
    this.userLoading = true;
    this.usersService.getUsers().subscribe( response => {
      this.usersData = response;
      this.userLoading = false;
    }, () => {
      this.userError = true;
    });
  }

}
