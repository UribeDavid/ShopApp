import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;
  signInMode: boolean = true;
  submitted: boolean = false;
  isLoading: boolean = false;

  constructor(private _formBuilder: FormBuilder,
              private _router: Router,
              private _nzNotificationService: NzNotificationService,
              private _authService: AuthService) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.authForm = this._formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5)]]
    });
  }

  authSubmit() {
    this.signInMode ? this.signIn() : this.signUp();
  }

  signIn(): void {
    this.isLoading = true;
    this.submitted = true;
    this._authService.signIn(this.authForm.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          localStorage.setItem('userData', JSON.stringify(user));
          this.isLoading = false;
          this.submitted = false;
          this._router.navigate(['products']);
          // ...
        })
        .catch((err) => {
          this.isLoading = false;
          const errorCode = err.code;
          const errorMessage = err.message;
          this._nzNotificationService.error('¡Error!', errorMessage || 'Ocurrió un error al ingresar');
        });
  }

  signUp(): void {
    this.isLoading = true;
    if (this.authForm.invalid) {
      this.isLoading = false;
      return;
    }
    this._authService.signUp(this.authForm.value)
        .then((userCredential) => {
          this.isLoading = false;
          this._nzNotificationService.success('¡Operación Existosa!', 'Registro realizado correctamente');
          this.signInMode = true;
        })
        .catch((err) => {
          this.isLoading = false;
          const errorCode = err.code;
          const errorMessage = err.message;
          this._nzNotificationService.error('¡Error!', errorMessage || 'Ocurrió un error al registrar');
        });
  }

}
