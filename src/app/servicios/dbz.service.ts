import { Injectable } from '@angular/core'
import { Personaje } from '../components/dbz/interfaces/interfaces'

@Injectable()
export class DbzService {
  private readonly _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 8000
    }
  ]

  public agregar (personaje: Personaje): void {
    this._personajes.push({ ...personaje })
  }

  public get personajes (): Personaje[] {
    return [...this._personajes]
  }
}
