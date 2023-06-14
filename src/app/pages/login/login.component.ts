import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = {
    "email" : '',
    "password" : ''
  }

  constructor(private snack:MatSnackBar, private loginService:LoginService){}

  formSubmit(){
    if(this.loginData.email.trim() == '' || this.loginData.email.trim() == null){
      this.snack.open('El email es requerido!', 'Aceptar',{
        duration : 3000
      })
      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this.snack.open('El password es requerido!', 'Aceptar',{
        duration : 3000
      })
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data:any) => {
        console.log(data);
      },(error) => {
        console.log(error);
      }
    )
  }
}
