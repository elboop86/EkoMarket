import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menufixed',
  templateUrl: './menufixed.component.html',
  styleUrls: ['./menufixed.component.css']
})
export class MenufixedComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';

  public href : String = "/login";

  constructor(private auth : AuthService) {}

  ngOnInit() {
      let token = this.auth.getToken();
      if (token != "0" && token != null) {
        this.href = "/profile";
      }
  }
  
  open() {
    this.sidenav.open();
    document.getElementById("container")!.style.zIndex = '99';
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
    document.getElementById("container")!.style.zIndex = '-2';
  }
}