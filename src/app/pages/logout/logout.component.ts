import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [RouterLink],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent implements OnInit {
  constructor(private ls: LoginService) {}
  ngOnInit(): void {
    localStorage.clear();
    this.ls.publish();
  }
}
