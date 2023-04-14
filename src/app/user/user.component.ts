import { Component, OnInit, Input } from '@angular/core'
import { User } from '../models/user.model'
import { UsersService } from '../services/users.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user!: User

  constructor(private router: Router) {}

  ngOnInit() {}

  onViewUser() {
    this.router.navigateByUrl(`users/${this.user.login}`)
  }
}
