import { Component } from '@angular/core'

@Component({
  selector: 'contador',
  templateUrl: './contador.component.html'
})

export class ContadorComponent {
  public titulo: string = 'App Contador'
  public count: number = 0
  public base: number = 5

  public acumular (valor: number): void {
    this.count += valor * this.base
  }
}
