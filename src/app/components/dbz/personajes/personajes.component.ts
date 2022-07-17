import { Component } from '@angular/core'
import { DbzService } from 'src/app/servicios/dbz.service'
import { Personaje } from '../interfaces/interfaces'

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  constructor (
    public dbzSevivice: DbzService
  ) { }

  // @Input() public personajes: Personaje[] = []
  public get personajes (): Personaje[] {
    return this.dbzSevivice.personajes
  }
}
