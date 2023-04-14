import { Component, OnInit, OnDestroy } from '@angular/core'
import { interval, Observable, Subject } from 'rxjs'
import { take, takeUntil, tap } from 'rxjs/operators'
import { User } from '../models/user.model'
import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users$!: Observable<User[]>

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.usersService.getAllUsers()
  }
}
