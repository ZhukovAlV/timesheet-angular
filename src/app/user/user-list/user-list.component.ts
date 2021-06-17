import { Component, OnInit } from '@angular/core';
import { UserControllerService } from 'src/app/client/user/user-client/services';
import { User } from 'src/app/client/user/user-client/models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: List<User>;

  constructor(private userService: UserControllerService) { }

  ngOnInit(): void {
    const userId: number = 1;
    this.userService.findAllUsingGET.subscribe({
      next: users => this.users = users
    });
   // console.log(this.user);
  }
}
