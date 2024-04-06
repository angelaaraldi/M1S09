import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { AppComponent } from '../app.component';
import { DietComponent } from '../diet/diet.component';

@Component({
  selector: 'app-diet-detail',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, AppComponent, DietComponent],
  templateUrl: './diet-detail.component.html',
  styleUrl: './diet-detail.component.scss'
})
export class DietDetailComponent {
  constructor(private appComponent: AppComponent) { }
  alimentos = this.appComponent.array
  alimento = this.appComponent.alimento
  alimentoTemplate = this.alimentos.find((alimento) => (alimento.id) == this.alimento)
  ngOnInit() {
    let alimentos = localStorage.getItem("alimentos")
    let idAlimento = localStorage.getItem("idAlimento")
    if (alimentos) {
      let alimentosParsed = JSON.parse(alimentos)
      let arrayAlimentos = Array.from(alimentosParsed)
      if (arrayAlimentos) {
        this.alimentoTemplate = this.alimentos.find((alimento) => (alimento.id) == Number(idAlimento))
      }
    }
  }
}
