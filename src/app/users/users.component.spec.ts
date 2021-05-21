import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {userMockData} from '../models/mockUserData';
import {of} from 'rxjs';
import {UsersService} from '../services/users.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let usersService: UsersService;
  let userDetailsSpy;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      providers: [],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents().then( () => {
      usersService = TestBed.get(UsersService);
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userDetailsSpy = spyOn(usersService, 'getUsers');
    userDetailsSpy.and.returnValue(of(userMockData));
  });

  it('should get user data', () => {
    component.getUsersData();
    expect(component.usersData).toEqual(userMockData.results[0]);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
