import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../security/auth.service";
import {ExtractInfoFromToken} from "../../../shared/models/extract-info-from-token";
import {environment} from "../../../../../environements/environement";


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.scss'
})
export class LoginRegisterComponent {
  loginForm: FormGroup;
  registerForm!: FormGroup;


  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['admin', Validators.required],
      password: ['admin', Validators.required]
    });

    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registerForm = this.formBuilder.group({
      username: ['Rachido', Validators.required],
      password: ['Rachid123', Validators.required],
      confirmPassword: ['Rachid123', Validators.required],
      email: ['Rachid123@gmail.com', [Validators.required, Validators.email]],
      firstName: ['Rachid123', Validators.required],
      lastName: ['Rachid123', Validators.required],
      enabled: [true],
    });
  }

  register(): void {
    if (this.registerForm.invalid) {
      return; // If the form is invalid, do not proceed with registration
    }

    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      // If password and confirmPassword are not equal, display error message and return
      console.error('Passwords do not match');
      // Optionally display error message to the user
      return;
    }

    this.authService.register(this.registerForm.value).subscribe(response => {
      // Handle successful registration response
      window.location.href = `${environment.angularUrl}/products/homePage`;
    })
  }

  login(): void {
    const {username, password} = this.loginForm.value;

    // this.authService.LoginWithoutBackend();
    // window.location.href = `${environment.angularUrl}/products/homePage`;

    this.authService.login(username, password).subscribe(response => {
      this.authService.storeTokens(response.accessToken, response.refreshToken);


      const preferredUsername = ExtractInfoFromToken.extractUsernameFromToken(response.accessToken)
      localStorage.setItem("bokeito-ecommerce-service-logged-client", preferredUsername);


      window.location.href = `${environment.angularUrl}/products/homePage`;
      //this.loginForm.reset();
    })
  }

}
