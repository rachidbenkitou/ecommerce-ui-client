import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../security/auth.service";

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.scss'
})
export class LoginRegisterComponent {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['admin', Validators.required],
      password: ['admin', Validators.required]
    });
  }

  login(): void {
    const {username, password} = this.loginForm.value;

    this.authService.LoginWithoutBackend();
    // this.authService.login(username, password).subscribe(response => {
    //   console.log('Logged in successfully!', response);
    //   //this.loginForm.reset();
    // })
  }

}
