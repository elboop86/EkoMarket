import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-body-profile',
  templateUrl: './body-profile.component.html',
  styleUrls: ['./body-profile.component.css']
})
export class BodyProfileComponent {

  public username! : String;
  public email! : String;


  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.userService.getUserData().subscribe(
      (response: any) => {
        this.username = response.username;
        this.email = response.email;
      },
      (error: any) => {
        console.error('Error de obtención de datos de usuario:', error);
      }
    );
  }

  logout () {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
