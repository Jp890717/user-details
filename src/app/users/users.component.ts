import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {

  usersData: any;
  userError: boolean;
  userLoading: boolean;

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

  show(id){
    document.querySelectorAll('.item').forEach(i => {
      i.classList.remove('show');
    });

    if (id === 'name') {
      document.querySelector('#name').classList.add('show');
    } else if (id === 'email') {
      document.querySelector('#email').classList.add('show');
    } else if (id === 'bDay') {
      document.querySelector('#bDay').classList.add('show');
    } else if (id === 'address') {
      document.querySelector('#address').classList.add('show');
    } else if (id === 'phoneNumber') {
      document.querySelector('#phoneNumber').classList.add('show');
    } else if (id === 'password') {
      document.querySelector('#password').classList.add('show');
    }
  }

}
