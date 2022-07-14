import { Component } from '@angular/core'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  private _heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  private _heroe: string = ''
  private _checker: boolean = false

  public borrarHeroe (): void {
    const heroe: string = prompt('Ingresa nombre del heroe') ?? ''
    if (!this.heroes.includes(heroe)) {
      this.checker = false
      alert('El heroe no se encuentra en el arreglo')
    } else {
      this._heroe = heroe
      this.checker = true
      this._heroes = this._heroes.filter((v: string): boolean => v !== heroe)
    }
  }

  public get heroe (): string {
    return this._heroe
  }

  public set heroe (vaule: string) {
    this._heroe = vaule
  }

  public get heroes (): string[] {
    return this._heroes
  }

  public set heroes (value: string[]) {
    this._heroes = value
  }

  public get checker (): boolean {
    return this._checker
  }

  public set checker (value: boolean) {
    this._checker = value
  }
}
