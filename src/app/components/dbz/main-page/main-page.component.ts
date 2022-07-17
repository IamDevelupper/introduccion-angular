import { Component } from '@angular/core'
import { Personaje } from '../interfaces/interfaces'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  public personaje: Personaje = {
    nombre: 'Thrunks',
    poder: 14000
  }
}
