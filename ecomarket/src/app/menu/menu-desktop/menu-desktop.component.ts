import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-desktop',
  templateUrl: './menu-desktop.component.html',
  styleUrls: ['./menu-desktop.component.css']
})
export class MenuDesktopComponent {

  public href : String = "/login";

  constructor(private auth : AuthService) {}

  ngOnInit() {
      let token = this.auth.getToken();
      if (token != "0" && token != null) {
        this.href = "/profile";
      }
  }
}
