import { Component } from '@angular/core'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent {
  private _nombre: string = 'Ironman'
  private _edad: number = 45

  public getDatos (): string {
    return `${this._nombre} - ${this._edad}`
  }

  get nombreCapitalizado (): string {
    return this._nombre.toUpperCase()
  }

  get nombre (): string {
    return this._nombre
  }

  set nombre (value: string) {
    this._nombre = value
  }

  get edad (): number {
    return this._edad
  }

  set edad (value: number) {
    this._edad = value
  }

  public mensaje (value: string): string | null {
    return prompt(value)
  }

  public toNumber (value: string | null): number {
    return Number(value)
  }

  public toStr (value: string | null): string {
    return String(value)
  }
}
