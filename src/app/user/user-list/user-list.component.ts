import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/client/user/user-client/models';
import { UserControllerService } from 'src/app/client/user/user-client/services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user!: User;

  constructor(private userService: UserControllerService) { }

  ngOnInit(): void {
    const userId: number = 1;
    this.userService.findByIdUsingGET(userId).subscribe(user => this.user = user);
    console.log(this.user);
  }

}
