import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, DialogModule, ButtonModule, CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  visivel: boolean = false;
  imgSrc: any;
  mostrarDialog() {
    this.visivel = true;
  }
  form = new FormGroup({
    tipo: new FormControl('', Validators.required),
    data: new FormControl('', Validators.required),
    distancia: new FormControl(''),
    tempo: new FormControl('')
  })
  arrayAtividades: any;
  salvarAtividade() {
    if (this.form.value.tipo && this.form.value.data) {
      const atividade = {
        tipo: this.form.value.tipo,
        data: this.form.value.data,
        distancia: this.form.value.distancia,
        tempo: this.form.value.tempo
      }
      let atividades = localStorage.getItem("atividades")
      if (atividades) {
        JSON.parse(atividades)
        this.arrayAtividades = Array.from(JSON.parse(atividades))
      } else {
        this.arrayAtividades = []
      }
      this.arrayAtividades.push(atividade)
      localStorage.setItem("atividades", JSON.stringify(this.arrayAtividades))
      alert("Atividade salva")
    } else {
      alert("Preencha o tipo e a data da atividade")
    }
  }
  ngOnInit() {
    let atividades = localStorage.getItem("atividades")
    if (atividades) {
      JSON.parse(atividades)
      this.arrayAtividades = Array.from(JSON.parse(atividades))
    } else {
      this.arrayAtividades = []
    }
  }
}
