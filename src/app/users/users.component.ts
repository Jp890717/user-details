import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UsersService} from '../services/users.service';
import {Users} from '../models/users-model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {

  usersData: Users;
  userError: boolean;
  userLoading: boolean;

  showName = true;
  showEmail = false;
  showBirthDay = false;
  showAddress = false;
  showPhone = false;
  showPassword = false;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData() {
    this.userLoading = true;
    this.usersService.getUsers().subscribe( response => {
      for (const user of response.results) {
        this.usersData = user;
      }
      this.userLoading = false;
    }, () => {
      this.userError = true;
    });
  }

}
