import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { Injectable } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'keephealth';
  email: any
  nome: any
  idade: any
  peso: any
  altura: any
  codigoUsuario: any
  alimento: any
  cep: any
  array: {id: number, name: string, description: string, qttCalories: number, qttDaysFeed: number, imageLink: string}[] = [];
  constructor() {
    this.array.push({
      id: 1,
      name: "Abóbora",
      description: "Abóbora cozida - Porção: 1 e 1/2 colher de sopa",
      qttCalories: 15,
      qttDaysFeed: 3,
      imageLink: "https://cdn.pixabay.com/photo/2012/12/24/08/40/autumn-72294_960_720.jpg"
    },
    {
      id: 2,
      name: "Alface",
      description: "Alface - Porção: 15 folhas",
      qttCalories: 15,
      qttDaysFeed: 3,
      imageLink: "https://cdn.pixabay.com/photo/2016/03/05/22/01/lettuce-1239155_1280.jpg"
    },
    {
      id: 3,
      name: "Beterraba",
      description: "Beterraba crua ralada - Porção: 2 colheres de sopa",
      qttCalories: 15,
      qttDaysFeed: 3,
      imageLink: "https://cdn.pixabay.com/photo/2015/08/24/01/56/beetroot-904371_1280.jpg"
    },
    {
      id: 4,
      name: "Brócolis",
      description: "Brócolis cozido - Porção: 4 e 1/2 colheres de sopa",
      qttCalories: 15,
      qttDaysFeed: 3,
      imageLink: "https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_1280.jpg"
    },
    {
      id: 5,
      name: "Cenoura",
      description: "Cenoura crua (picada) - Porção: 1 colher de servir",
      qttCalories: 15,
      qttDaysFeed: 3,
      imageLink: "https://cdn.pixabay.com/photo/2018/02/25/08/56/carrot-3179988_960_720.jpg"
    },
    {
      id: 6,
      name: "Pepino",
      description: "Pepino picado - Porção: 4 colheres de sopa",
      qttCalories: 15,
      qttDaysFeed: 3,
      imageLink: "https://cdn.pixabay.com/photo/2015/07/15/09/52/cucumber-845953_960_720.jpg"
    },
    {
      id: 7,
      name: "Rúcula",
      description: "Rúcula - Porção: 15 folhas",
      qttCalories: 15,
      qttDaysFeed: 3,
      imageLink: "https://cdn.pixabay.com/photo/2015/10/02/21/41/green-969099_1280.jpg"
    },
    {
      id: 8,
      name: "Tomate",
      description: "Tomate comum - Porção: 4 fatias",
      qttCalories: 15,
      qttDaysFeed: 3,
      imageLink: "https://cdn.pixabay.com/photo/2016/03/05/19/03/tomatoes-1238255_1280.jpg"
    },
    {
      id: 9,
      name: "Abacaxi",
      description: "Abacaxi - Porção: 1 fatia",
      qttCalories: 70,
      qttDaysFeed: 3,
      imageLink: "https://cdn.pixabay.com/photo/2016/03/05/21/50/fresh-1239116_1280.jpg"
    },
    {
      id: 10,
      name: "Ameixa",
      description: "Ameixa-preta seca - Porção: 3 unidades",
      qttCalories: 70,
      qttDaysFeed: 3,
      imageLink: "https://cdn.pixabay.com/photo/2016/11/18/17/38/dried-apricots-1836009_1280.jpg"
    });
    localStorage.setItem("alimentos", JSON.stringify(this.array)); 
  }
}
