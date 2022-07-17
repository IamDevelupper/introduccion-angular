import { Component, Input, OnInit } from '@angular/core'
import { DbzService } from 'src/app/servicios/dbz.service'
import { Personaje } from '../interfaces/interfaces'

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html'
})
export class NuevoComponent implements OnInit {
  // @Output()
  // public onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>()
  constructor (
    private readonly dbzService: DbzService
  ) { }

  ngOnInit (): void {
    this.checkName()
  }

  @Input() public personaje: Personaje = {
    nombre: '',
    poder: 0
  }

  public nm: boolean = false
  public pd: boolean = false

  public agregar (): void {
    if (this.nm || this.pd) {
      return
    }
    this.dbzService.agregar({ ...this.personaje })
  }

  public checkName (): void {
    if (this.personaje.nombre === '') {
      this.nm = true
    } else {
      this.nm = false
    }
  }

  public checkPower (e: any): void {
    const isNumber: RegExp = /^\d+$/g
    if (!isNumber.test(e.target.value)) {
      this.pd = true
    } else {
      this.pd = false
    }
  }
}
