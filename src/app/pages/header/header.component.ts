import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  menuItems = [
    {
      path: '/counter',
      title: "Simple Counter"
    },
    {
      path: '/login',
      title: "Login"
    },
    {
      path: '/planner',
      title: "TODO list"
    },
    {
      path: '/cat-facts',
      title: "Cat Facts"
    },
  ];
}
