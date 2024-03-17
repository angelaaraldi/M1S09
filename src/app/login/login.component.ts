import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login = {
    email: '',
    senha: ''
  }
  constructor(private router: Router) { }
  usuariosCadastrados: any = localStorage.getItem("usuariosCadastrados")
  entrar() {
    if (this.usuariosCadastrados?.includes('{"email":"' + this.login.email + '","senha":"' + this.login.senha + '"}')) {
      this.router.navigate(['/home'])
    } else {
      alert("Usuário ou senha inválidos")
    }
  }
  alterarSenha() {
    let usuariosParsed = JSON.parse(this.usuariosCadastrados)
    let arrayUsuarios = Array.from(usuariosParsed)
    let usuario: any = arrayUsuarios.find((usuario: any) => (usuario.email == this.login.email))
    usuario.senha = "a1b2c4d4"
    this.login.senha = "a1b2c4d4"
    localStorage.setItem("usuariosCadastrados", JSON.stringify(arrayUsuarios))
    this.usuariosCadastrados = JSON.stringify(arrayUsuarios)
    alert("Prossiga utilizando a nova senha: a1b2c4d4")
  }
  irParaCadastro() {
    this.router.navigate(['/cadastro'])
  }
}