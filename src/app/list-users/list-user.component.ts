import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//users!:any;



  //users = ["Sai","Ramesh","Manohar"];



  users=[



    {id:101, name:"Sai", email:"sai@gmail.com"},

 

    {id:102, name:"Ramesh", email:"r@gmail.com"},

 

    {id:103, name:"Manohar", email:"Manohar@gmail.com"},

 

  ];

 

 

 

  //Next Task:ListTaskComponent

 

  tasks = [

 

    {id:1, name:"Install Java", status:"COMPLETED"},

 

    {id:2, name:"Install NodeJS", status:"PENDING"},

 

  ]

 

    deleteUser(){

 

      alert("Successfully Deleted");

 

    }

 

 

 

  }
