import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ],
  providers: [MessageService]
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  public carouselArray: any[] = [];

  constructor( private authService: AuthService, private fb: FormBuilder, 
               private router: Router, private messageService: MessageService ) { }

  ngOnInit(): void {
    this.carouselArray = [
      {
        image: './assets/images/logo_UFPS.png',
        name: 'Logo UFPS',
        width: '520'
      },
      {
        image: './assets/images/logo_ingieneria_sistemas.png',
        name: 'Logo Ingieneria de Sistemas',
        width: '300'
      },
      {
        image: './assets/images/logo_SIREDSE_2.png',
        name: 'Logo Semillero',
        width: '390'
      }
    ];
  }

  isValidField(field: string): boolean | null {
    return this.loginForm.controls[field].errors &&
      this.loginForm.controls[field].touched;
  }

  onLogin(): void {
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }

    const { correo, password } = this.loginForm.value;
    this.authService.login(correo, password)
      .subscribe( 
        () => this.router.navigate(['/admin/inicio']),
        ( error: { codigo:number, message:string } ) => this.messageService.add({ severity: 'error', detail: error.message })
      );
  }
}
