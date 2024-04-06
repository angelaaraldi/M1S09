import { Component, Injectable } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HeaderComponent, SidebarComponent],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.scss'
})
export class DietComponent {
  constructor(private router: Router, private appComponent: AppComponent) { }
  alimentos = this.appComponent.array
  form = new FormGroup({alimento: new FormControl('')})
  pesquisarAlimento(){
    let alimento = this.alimentos.find((alimento)=>(alimento.name) == this.form.value.alimento)
    if (alimento) {
      this.appComponent.alimento = alimento.id
      localStorage.setItem("idAlimento", JSON.stringify(alimento.id))
      this.router.navigate([`/diet/${alimento.id}`])
    } else {
      alert("Alimento não encontrado")
    }
  }
  abrirDetalhes(id: number) {
    localStorage.setItem("idAlimento", JSON.stringify(id))
    this.router.navigate(["diet", id])
    this.appComponent.alimento = id
  }
}