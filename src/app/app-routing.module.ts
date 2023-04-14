import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UserListComponent } from './user-list/user-list.component'
import { SingleUserComponent } from './single-user/single-user.component'

const routes: Routes = [
  { path: 'users/:login', component: SingleUserComponent },
  { path: 'users', component: UserListComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
