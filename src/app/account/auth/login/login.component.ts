import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { AuthenticationService } from '../../../core/services/auth.service';

import { ActivatedRoute, Router } from '@angular/router';

import { first } from 'rxjs/operators';


import { environment } from '../../../../environments/environment';

import { UserProfileService } from 'src/app/core/services/user.service';


@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.scss']

})


/**

 * Login component

 */

export class LoginComponent implements OnInit {


  loginForm: FormGroup;

  submitted = false;

  error = '';

  returnUrl: string;

  passwordVisible: boolean = false;


  getPasswordInputType(): string {

    return this.passwordVisible ? 'text' : 'password';

  }


  togglePasswordVisibility(): void {

    this.passwordVisible = !this.passwordVisible;

  }




  // set the currenr year

  year: number = new Date().getFullYear();


  constructor(private formBuilder: FormBuilder, 

    private route: ActivatedRoute, 

    private router: Router, 

    private userProfileService: UserProfileService) { }


  ngOnInit() {

    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required]],

    });

    if (localStorage.getItem("token")){

      

      this.error = ''

    this.router.navigate(['dashboard']);

    }else {

   


    // reset login status

    // this.authenticationService.logout();

    // get return url from route parameters or default to '/'

    // tslint:disable-next-line: no-string-literal

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  }


  // convenience getter for easy access to form fields

  get f() { return this.loginForm.controls; }


  /**

   * Form submit

   */

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid

    if (this.loginForm.invalid) {

      return;

    } else {

      const credentials = {

        email: this.loginForm.controls.email.value,

        password: this.loginForm.controls.password.value

      };

        this.userProfileService

        .login(credentials)

        .subscribe({

          next : (res) => {

            localStorage.setItem("token",res.token)

            localStorage.setItem("role",res.role  )

            localStorage.setItem("email",res.email  )


            this.router.navigate(['dashboard']);

          }

        })

      

  }

}

}