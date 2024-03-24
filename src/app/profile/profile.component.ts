import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  styleUrl: './profile.component.css'
})

export class ProfileComponent {
  constructor(private appComponent: AppComponent, private addressService: AddressService) { }
  form = new FormGroup({ cep: new FormControl('') })
  email = this.appComponent.email
  nome = this.appComponent.nome
  idade = this.appComponent.idade
  peso = this.appComponent.peso
  altura = this.appComponent.altura
  codigoUsuario = this.appComponent.codigoUsuario
  cep: any = {};
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
