import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    dataNascimento: new FormControl(''),
    senha: new FormControl(''),
    confirmarSenha: new FormControl('')
  })
  arrayUsuarios: any;
  cadastrar() {
    if (this.form.value.nome && this.form.value.email && this.form.value.dataNascimento && this.form.value.senha && this.form.value.confirmarSenha && (this.form.value.senha === this.form.value.confirmarSenha)) {
      const usuario = {
        email: this.form.value.email,
        senha: this.form.value.senha
      }
      let usuariosCadastrados = localStorage.getItem("usuariosCadastrados")
      if (usuariosCadastrados) {
        JSON.parse(usuariosCadastrados)
        this.arrayUsuarios = Array.from(JSON.parse(usuariosCadastrados))
      } else {
        this.arrayUsuarios = []
      }
      this.arrayUsuarios.push(usuario)
      localStorage.setItem("usuariosCadastrados", JSON.stringify(this.arrayUsuarios))
      alert("Cadastro realizado com sucesso")
    } else {
      alert("Preencha todos os campos e verifique se as senhas correspondem")
    }
  }
  constructor(private router: Router) { }
  voltar() {
    this.router.navigate(['/login'])
  }
}
