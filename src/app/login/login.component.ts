import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login = {
    email: '',
    senha: ''
  }
  constructor(private router: Router, private appComponent: AppComponent) { }
  usuariosCadastrados: any = localStorage.getItem("usuariosCadastrados")
  logado: boolean = false
  ngOnInit(){
    localStorage.setItem("logado", JSON.stringify(this.logado))
  }
  entrar() {
    if (this.usuariosCadastrados?.includes('{"email":"' + this.login.email + '","senha":"' + this.login.senha + '","nome":"')) {
      this.appComponent.email = this.login.email
      let usuariosParsed = JSON.parse(this.usuariosCadastrados)
      let arrayUsuarios = Array.from(usuariosParsed)
      let usuario: any = arrayUsuarios.find((usuario: any) => (usuario.email == this.login.email))
      this.appComponent.nome = usuario.nome
      let data = new Date()
      let dataNascimento = new Date(usuario.dataNascimento)
      let ano = data.getFullYear()
      let mes = data.getMonth()
      let dia = data.getDate()
      let anoNascimento = dataNascimento.getFullYear()
      let mesNascimento = dataNascimento.getMonth()
      let diaNascimento = dataNascimento.getDate()
      function calcularIdade(ano: number, mes: number, dia: number, anoNascimento: number, mesNascimento: number, diaNascimento: number) {
        if (mesNascimento > mes || (mesNascimento == mes && diaNascimento > dia)) {
          return ano - anoNascimento - 1
        } else {
          return ano - anoNascimento
        }
      }
      this.appComponent.idade = calcularIdade(ano, mes, dia, anoNascimento, mesNascimento, diaNascimento)
      this.appComponent.peso = usuario.peso
      this.appComponent.altura = usuario.altura
      this.appComponent.codigoUsuario = usuario.codigoUsuario
      localStorage.setItem("usuario", JSON.stringify(usuario))
      this.logado = true
      localStorage.setItem("logado", JSON.stringify(this.logado))
      this.router.navigate(['/home'])
    } else {
      alert("Usuário ou senha inválidos")
    }
  }
  alterarSenha() {
    if (this.login.email && this.usuariosCadastrados?.includes('{"email":"' + this.login.email)) {
      let usuariosParsed = JSON.parse(this.usuariosCadastrados)
      let arrayUsuarios = Array.from(usuariosParsed)
      let usuario: any = arrayUsuarios.find((usuario: any) => (usuario.email == this.login.email))
      usuario.senha = "a1b2c4d4"
      this.login.senha = "a1b2c4d4"
      localStorage.setItem("usuariosCadastrados", JSON.stringify(arrayUsuarios))
      this.usuariosCadastrados = JSON.stringify(arrayUsuarios)
      alert("Prossiga utilizando a nova senha: a1b2c4d4")
    } else {
      alert("E-mail inválido")
    }
  }
  irParaCadastro() {
    this.router.navigate(['/cadastro'])
  }
}