import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

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
    if (this.alimentos.find((alimento)=>(alimento.name) == this.form.value.alimento)) {
      this.router.navigate([`/diet/${this.form.value.alimento}`])
    } else {
      alert("Alimento não encontrado")
    }
  }
  abrirDetalhes(alimento: string) {
    this.router.navigate(["diet", alimento])
    this.appComponent.alimento = alimento
  }
}