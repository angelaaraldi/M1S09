import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConverterAlturaPipe } from '../converter-altura.pipe';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, ConverterAlturaPipe, HeaderComponent, SidebarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent {
  constructor(private appComponent: AppComponent, private addressService: AddressService) { }
  form = new FormGroup({ cep: new FormControl('', Validators.required) })
  email = this.appComponent.email
  nome = this.appComponent.nome
  idade = this.appComponent.idade
  peso = this.appComponent.peso
  altura = this.appComponent.altura
  codigoUsuario = this.appComponent.codigoUsuario
  cep: any = {};
  ngOnInit(){
    let usuario = localStorage.getItem("usuario")
    if (usuario) {
      let usuarioParseado = JSON.parse(usuario)
      this.appComponent.email = usuarioParseado.email
      this.appComponent.nome = usuarioParseado.nome
      let data = new Date()
      let dataNascimento = new Date(usuarioParseado.dataNascimento)
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
      this.appComponent.peso = usuarioParseado.peso
      this.appComponent.altura = usuarioParseado.altura
      this.appComponent.codigoUsuario = usuarioParseado.codigoUsuario
    }
  }
  pesquisarCep() {
    this.appComponent.cep = this.form.value.cep
    this.addressService.get(this.appComponent.cep).subscribe({
      next: (response)=>{
        this.cep = response;
      },
      error: (err)=>{
        console.error("Error", err)
      }
    })
  }
}
