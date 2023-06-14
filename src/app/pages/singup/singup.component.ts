import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit{
  
  public user ={
    nombre : '',
    apellido : '',
    email : '',
    password : '',
    estado : 1,
    authority : 'ROLE_ADMINISTRADOR'
  }

  constructor(private userService:UserService,private snack:MatSnackBar){}

  ngOnInit(): void {
    
  }
  
  formSubmit(){
    console.log(this.user);
    if(this.user.email == '' || this.user.email == null){
      this.snack.open('El email es requerido!', 'Aceptar', {
        duration: 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }

    this.userService.añadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Usuario guardado', 'Usuario registrado con exito','success')
      },(error) => {
        console.log(error);
        this.snack.open('Ha ocurrido un error en el sistema!', 'Aceptar', {
          duration: 3000,
          verticalPosition : 'top',
          horizontalPosition : 'right'
        });
      }
    )
  }
}
