import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-diet-detail',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, AppComponent],
  templateUrl: './diet-detail.component.html',
  styleUrl: './diet-detail.component.css'
})
export class DietDetailComponent {
  constructor(private appComponent: AppComponent){}
  alimentos = this.appComponent.array
  alimento = this.appComponent.alimento
  alimentoTemplate = this.alimentos.find((alimento)=>(alimento.name) == this.alimento)
}
