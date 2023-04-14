import { Component, OnInit } from '@angular/core'
import { User } from '../models/user.model'
import { UsersService } from '../services/users.service'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css'],
})
export class SingleUserComponent implements OnInit {
  user!: User
  user$!: Observable<User>

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const userLogin = (+this.route.snapshot.params['login']).toString()
    this.user$ = this.usersService.getUserByLogin(userLogin)
  }
}
