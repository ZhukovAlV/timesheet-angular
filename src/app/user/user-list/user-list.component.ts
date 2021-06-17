import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IterableUser } from 'src/app/client/user/user-client/models/iterable-user';
import { UserControllerService } from 'src/app/client/user/user-client/services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users!: Observable<IterableUser>;

  constructor(private userService: UserControllerService) { }

  ngOnInit(): void {
    this.userService.findAllUsingGET.subscribe({
      next: (users:any) => this.users = users
    });
   // console.log(this.user);
  }
}
