import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  users: User[] = []

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://api.github.com/users')
  }

  getUserByLogin(UserLogin: string): Observable<User> {
    return this.http.get<User>(`https://api.github.com/users/${UserLogin}`)
  }
}
