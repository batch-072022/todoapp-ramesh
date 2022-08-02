import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ListUserComponent } from './list-users/list-user.component';

import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';

import { AddTaskComponent } from './add-task/add-task.component';

import { ListTaskComponent } from './list-task/list-task.component';

import { EditTaskComponent } from './edit-task/edit-task.component';





const routes: Routes = [



  {path:'home', component:HomeComponent},



  {path:'register', component:RegisterComponent},



  {path:'login', component:LoginComponent},



  {path:'listuser', component:ListUserComponent},

  {path:'listtask',component:ListTaskComponent},

  {path:'addtask', component:AddTaskComponent},

  {path:'edittask', component:EditTaskComponent},

  {path:'', redirectTo:'home' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{ }

